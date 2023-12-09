import { RouteShorthandOptions } from "fastify";

export const rootSchema: RouteShorthandOptions["schema"] = {
    response: {
        200: {
            type: 'object',
            required: ["message"],
            properties: {
                message: {
                    type: 'string'
                }
            }
        }
    }
}
