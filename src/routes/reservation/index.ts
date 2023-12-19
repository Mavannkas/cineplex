import { FastifyPluginAsync } from "fastify";

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.post('/', async (req, reply) => {
    })
}

export default plugin;