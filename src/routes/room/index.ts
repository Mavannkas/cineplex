import { FastifyPluginAsync } from "fastify";




const plugin: FastifyPluginAsync = async (fastify, opts) => {

    fastify.get("/", async (req, reply) => {
        return fastify.room.getRooms()
    })

    fastify.get("/:id", async (request, reply) => {

    })

    fastify.post('/', async (request, reply) => {

    })

    fastify.delete('/:id', async (request, reply) => {
    })
}

export default plugin;

