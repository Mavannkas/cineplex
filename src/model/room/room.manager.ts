import { MySQLPromisePool } from "@fastify/mysql";
import { Room, isSeatArrangementArray } from "./room.model.js";
import { httpErrors } from "@fastify/sensible";
import { PaginationParams, queryWithPagination } from "../../utils/search.utils.js";


const ROOM_SEAT_QUERY = `
SELECT Rooms.id as id, Tickets.seat as seat
FROM Rooms 
INNER JOIN Screenings ON Rooms.id = Screenings.room 
INNER JOIN Tickets ON Screenings.id = Tickets.screening_id
WHERE Rooms.id = ?
`;

export default class RoomManager {
    constructor(private mysql: MySQLPromisePool) {
    }

    async getRoomById(id: string): Promise<Room> {
        const [item] = await this.mysql.query('SELECT * FROM Rooms WHERE id = ?', [id])
        if (!Array.isArray(item) || item.length === 0)
            throw httpErrors.notFound("Room not found")

        return (item?.[0] ?? {}) as Room
    }

    async getRoomWithFreeSeatsById(id: string): Promise<number[][]> {
        const room = await this.getRoomById(id);
        if (!isSeatArrangementArray(room.seat_arrangement)) {
            return [];
        }

        const [items] = await this.mysql.query(ROOM_SEAT_QUERY, [id]);
        const seats = room.seat_arrangement;


        (<{ id: number, seat: string }[]>items).forEach((item) => {
            if (item.seat) {
                const [row, col] = item.seat.split(',').map(Number);
                if (isNaN(row) || isNaN(col)) {
                    console.error(`Invalid seat arrangement for room ${id}: ${item.seat}`);
                    throw httpErrors.internalServerError()
                }
                seats[row][col] = 2;
            }
        });

        return seats;
    }
    async getRooms(params?: PaginationParams) {
        const [items] = await this.mysql.query(...queryWithPagination('SELECT * FROM Rooms', [], params))
        return items
    }

    async createRoom(data: Omit<Room, "id">) {
        data.seat_arrangement = JSON.stringify(data.seat_arrangement)
        await this.mysql.query('INSERT INTO Rooms SET ?', [data]);
    }

    async deleteRoom(id: string) {
        await this.mysql.query('DELETE FROM Rooms WHERE id = ?', [id]);
    }
}