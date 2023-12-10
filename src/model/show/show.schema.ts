import { RouteShorthandOptions } from "fastify";

const show = {
    type: 'object',
    required: ["id", "presentation_type", 'room', 'movie_id', 'time', 'date', 'price'],
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

export const showBody = {
    type: 'object',
    required: ["presentation_type", 'room', 'movie_id', 'time', 'date', 'price'],
    properties: {
        presentation_type: { type: "number" },
        room: { type: "number" },
        movie_id: { type: "number" },
        time: { type: "string" },
        date: { type: "string" },
        price: { type: "string" },
        price2: { type: "boolean" },
    }
}

export const showSchema: RouteShorthandOptions["schema"] = {
    response: {
        200: {
            type: 'array',
            items: show,
        }
    },
    body: showBody,
}