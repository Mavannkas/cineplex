import { FastifyPluginAsync } from "fastify";
import { ReservationParams } from "../../model/reservation/reservation.model.js";
import { reservationSchema } from "../../model/reservation/reservation.schema.js";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.post('/', {
        schema: {
            body: reservationSchema?.body,
        }
    }, async (req, reply) => {
        reply.status(204)
        return await fastify.reservation.createReservation(req.body as ReservationParams ?? {} as ReservationParams)
    })
}

export default plugin;