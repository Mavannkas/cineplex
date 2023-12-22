import { FastifyPluginAsync } from "fastify";

import { Screening, Screenings } from "../../model/screening/screening.model.js";
import { screeningSchema } from "../../model/screening/screening.schema.js";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get("/", {
        schema: {
            response: screeningSchema?.response
        },
    }, async (req, reply): Promise<Screenings> => {
        //Todo data layer as a custom plugin
        const [rows] = await fastify.mysql.query("SELECT * from Screenings")

        console.log(rows);
        return rows as Screenings
    })

    fastify.get("/:id/seats_status", {
        schema: {
            params: screeningSchema?.params,

        }
    }, async (request, reply) => {
        const { id } = request?.params as { id: string };

        return await fastify.room.getFreeSeatsById(id ?? "")
    })

    fastify.post('/', {
        schema: {
            body: screeningSchema?.body,
        }
    }, async (req, reply) => {
        const { presentation_type, movie_id, room, time, date, price } = req.body as Screening
        await fastify.mysql.query("INSERT INTO Screenings (presentation_type, movie_id, room, time, date, price) VALUES (?, ?, ?, ?, ?, ?)", [presentation_type, movie_id, room, time, date, price])
        return {
            ok: true
        }
    })
}

export default plugin;