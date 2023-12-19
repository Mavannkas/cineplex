import { RouteShorthandOptions } from "fastify";

const screening = {
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

export const screeningBody = {
    type: 'object',
    required: ["presentation_type", 'room', 'movie_id', 'time', 'date', 'price'],
    properties: {
        presentation_type: { type: "number" },
        room: { type: "number" },
        movie_id: { type: "number" },
        time: { type: "string" },
        date: { type: "string" },
        price: { type: "string" },
    }
}

export const screeningSchema: RouteShorthandOptions["schema"] = {
    response: {
        200: {
            type: 'array',
            items: screening,
        }
    },
    body: screeningBody,
}