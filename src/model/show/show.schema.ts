import { RouteShorthandOptions } from "fastify";

const show = {
    type: 'object',
    required: ['id', "presentation_type", 'roon', 'movie_id', 'time', 'date', 'price'],
    properties: {
        id: { type: "number" },
        presentation_type: { type: "number" },
        room: { type: "number" },
        movie_id: { type: "number" },
        time: { type: "string" },
        date: { type: "string" },
        price: { type: "string" },
    }
}

export const showSchema: RouteShorthandOptions["schema"] = {
    response: {
        200: {
            type: 'array',
            items: show,
        }
    }
}
