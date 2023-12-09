import { FastifyPluginAsync } from "fastify";
import { showSchema } from "../../model/show/show.schema.js";
import { Screenings } from "../../model/show/show.model.js";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get("/", {
        schema: showSchema,
    }, async (req, reply): Promise<Screenings> => {
        const [rows] = await fastify.mysql.query("SELECT * from Seanse")
        console.log(rows);
        return rows as Screenings
    })

    fastify.post('/', {}, async (req, reply) => {

    })
}

export default plugin;