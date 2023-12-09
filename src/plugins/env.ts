import fp from 'fastify-plugin'
import Env, { FastifyEnvOptions } from "@fastify/env"

export default fp<FastifyEnvOptions>(async (fastify) => {

    void fastify.register(Env, {
        schema: {
            type: 'object',
            required: ['DB_PORT', 'DB_PASSWORD', 'DB_HOST', 'DB_LOGIN', 'DB_NAME'],
            properties: {
                PORT: {
                    type: 'number',
                },
                DB_PORT: {
                    type: 'number',
                },
                DB_PASSWORD: {
                    type: 'string',
                },
                DB_HOST: {
                    type: 'string',
                },
                DB_LOGIN: {
                    type: 'string',
                },
                DB_NAME: {
                    type: 'string',
                }
            }
        }
    })
})
