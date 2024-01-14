import { FastifyPluginAsync } from "fastify";
import { movieSchema } from "../../model/movie/movie.schema.js";
import { isMovie } from "../../model/movie/movie.model.js";

interface ParamsWithID {
  id: string;
}

const isParamsWithID = (params: unknown): params is ParamsWithID => {
  return typeof params === "object" && params !== null && "id" in params;
};

const plugin: FastifyPluginAsync = async (fastify, opts) => {
  fastify.get(
    "/:id",
    {
      schema: {
        params: movieSchema?.body,
      },
    },
    async (request, reply) => {
      if (!isParamsWithID(request.params)) {
        throw fastify.httpErrors.badRequest();
      }

      return request.params.id;
    }
  );

  fastify.post(
    "/",
    {
      schema: {
        body: movieSchema?.body,
        response: {
          201: {
            type: "object",
            additionalProperties: false,
            properties: {
              id: { type: "number" },
            },
          },
        },
      },
    },
    async (request, reply) => {
      const { body } = request;
      console.log(body);
      if (!isMovie(body)) {
        throw fastify.httpErrors.badRequest("Invalid body");
      }
      reply.status(201);
      return {
        id: await fastify.movie.createMovie(body),
      };
    }
  );

  fastify.delete(
    "/:id",
    {
      schema: {
        params: movieSchema?.params,
        response: {
          204: {
            type: "null",
          },
        },
      },
    },
    async (request, reply) => {
      const { id } = request?.params as { id: string };
      reply.status(204);
      return await fastify.movie.deleteMovie(id ?? "");
    }
  );
};

export default plugin;
