import { MySQLPromisePool } from "@fastify/mysql";
import { ReservationParams } from "./reservation.model.js";
import { httpErrors } from "@fastify/sensible";
import RoomManager from "../room/room.manager.js";
import { SeatStatus } from "../room/room.model.js";

export default class ReservationManager {
    private roomManager: RoomManager;
    constructor(private mysql: MySQLPromisePool) {
        this.roomManager = new RoomManager(mysql);
    }


    private isSeatAvailable(seatArrangement: SeatStatus[][], seat: string) {
        const [row, col] = seat.split(",").map(Number);
        return seatArrangement?.[row]?.[col] === SeatStatus.FREE_SEAT;

    }
    async createReservation(params: ReservationParams) {
        if (!params.seat.match(/^\d+,\d+$/)) {
            throw httpErrors.badRequest("Seat is not valid");
        }
        const seatsArrangement = await this.roomManager.getFreeSeatsById(params.screening_id ?? "");
        if (!this.isSeatAvailable(seatsArrangement, params.seat)) {
            throw httpErrors.badRequest("Seat is not available");
        }

        await this.mysql.query(`
        INSERT INTO Tickets SET ?
        `, [params]);
    }
}