import { MySQLPromisePool } from "@fastify/mysql";

export default class RoomManager {
    constructor(private mysql: MySQLPromisePool) {
    }

    async getRoomById(id: string) {
        const [item] = await this.mysql.query('SELECT * FROM Rooms WHERE id = ?', [id])
        return item
    }

    async getRooms() {
        const [items] = await this.mysql.query('SELECT * FROM Rooms')
        return items
    }

    async createRoom(name: string) {
        await this.mysql.query('INSERT INTO Rooms (name) VALUES (?)', [name])
    }

    async deleteRoom(id: string) {
        await this.mysql.query('DELETE FROM Rooms WHERE id = ?', [id])
    }
}