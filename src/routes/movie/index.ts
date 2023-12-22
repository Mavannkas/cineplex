import { FastifyPluginAsync } from "fastify";

interface ParamsWithID {
    id: string;
}

const isParamsWithID = (params: unknown): params is ParamsWithID => {
    return typeof params === "object" && params !== null && "id" in params;
}

const plugin: FastifyPluginAsync = async (fastify, opts) => {
    fastify.get("/:id", async (request, reply) => {
        if (!isParamsWithID(request.params)) {
            throw fastify.httpErrors.badRequest()
        }

        return request.params.id;
    })
}

export default plugin;

