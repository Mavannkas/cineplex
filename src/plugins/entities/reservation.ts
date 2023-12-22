import { FastifyEnvOptions } from "@fastify/env"
import fp from 'fastify-plugin'

import ReservationManager from "../../model/reservation/reservation.manager.js"



export default fp<FastifyEnvOptions>(async (fastify) => {

    void fastify.decorate("reservation", new ReservationManager(fastify.mysql))
})

declare module 'fastify' {
    interface FastifyInstance {
        reservation: ReservationManager;
    }
}