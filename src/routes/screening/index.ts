import { FastifyPluginAsync } from "fastify";
import { showSchema } from "../../model/show/show.schema.js";
import { Screening, Screenings } from "../../model/show/show.model.js";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get("/", {
        schema: {
            response: showSchema?.response
        },
    }, async (req, reply): Promise<Screenings> => {
        //Todo data layer as a custom plugin
        const [rows] = await fastify.mysql.query("SELECT * from Screenings")

        console.log(rows);
        return rows as Screenings
    })

    fastify.post('/', {
        schema: {
            body: showSchema?.body,
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