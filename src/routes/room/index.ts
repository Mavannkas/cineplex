import { FastifyPluginAsync } from "fastify";
import { isPaginationParams } from "../../utils/search.utils.js";
import { isRoom } from "../../model/room/room.model.js";
import { room, roomSchema } from "../../model/room/room.schema.js";




const plugin: FastifyPluginAsync = async (fastify, opts) => {

    fastify.get("/", {
        schema: {
            querystring: roomSchema?.querystring,
            response: roomSchema?.response,
        }
    }, async (request, reply) => {
        if (isPaginationParams(request?.query)) {
            return fastify.room.getRooms(request.query)
        }

        return fastify.room.getRooms()
    })

    fastify.get("/:id", {
        schema: {
            params: roomSchema?.params,
            response: {
                200: room,
            },
        }
    }, async (request, reply) => {
        const { id } = request?.params as { id: string };

        return await fastify.room.getRoomById(id ?? "")
    })

    fastify.get("/:id/seats_status", {
        schema: {
            params: roomSchema?.params,

        }
    }, async (request, reply) => {
        const { id } = request?.params as { id: string };

        return await fastify.room.getRoomWithFreeSeatsById(id ?? "")
    })

    fastify.post('/', {
        schema: {
            body: roomSchema?.body,
            response: {
                201: {
                    type: 'null',
                }
            }
        }
    }, async (request, reply) => {
        const { body } = request
        if (!isRoom(body)) {
            throw fastify.httpErrors.badRequest("Invalid body")
        }
        await fastify.room.createRoom(body);
        reply.status(201)
    })

    fastify.delete('/:id', {
        schema: {
            params: roomSchema?.params,
            response: {
                204: {
                    type: 'null',
                }
            }
        }
    }, async (request, reply) => {
        const { id } = request?.params as { id: string };
        reply.status(204)
        return await fastify.room.deleteRoom(id ?? "")
    })
}

export default plugin;
