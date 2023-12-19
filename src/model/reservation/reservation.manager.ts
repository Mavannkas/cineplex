import { MySQLPromisePool } from "@fastify/mysql";
import { ReservationParams } from "./reservation.model.js";

export default class ReservationManager {
    constructor(private mysql: MySQLPromisePool) {
    }

    async createReservation(params: ReservationParams) {

    }
}