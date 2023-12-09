import { FastifyPluginAsync } from "fastify";
import { showSchema } from "../../model/show/show.schema.js";
import { Show } from "../../model/show/show.model.js";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get<Show>("/", {
        schema: showSchema,
    }, async (req, reply): Promise<Show[]> => {
        const [rows] = await fastify.mysql.query("SELECT * from Seanse")
        console.log(rows);
        return rows
    })
}

export default plugin;