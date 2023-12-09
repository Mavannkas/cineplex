import fp from 'fastify-plugin'
import Swagger from "@fastify/swagger"
import SwaggerUI from "@fastify/swagger-ui"

export default fp(async (fastify) => {
    void fastify.register(Swagger, {})
    void fastify.register(SwaggerUI, {
        routePrefix: '/doc',
        uiConfig: {
            docExpansion: 'full',
            deepLinking: false
        },
        uiHooks: {
            onRequest: function (request, reply, next) { next() },
            preHandler: function (request, reply, next) { next() }
        },
        staticCSP: true,
        transformStaticCSP: (header) => header,
        transformSpecification: (swaggerObject, request, reply) => { return swaggerObject },
        transformSpecificationClone: true
    });
})