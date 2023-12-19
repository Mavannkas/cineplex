import { RouteShorthandOptions } from "fastify";

export const room = {
    type: 'object',
    additionalProperties: false,
    properties: {
        id: { type: 'number' },
        number: { type: 'number' },
        seating_capacity: { type: 'number' },
        seat_arrangement: { type: 'array' },
        location: { type: 'number' },
    }
}

const roomBody = {
    type: 'object',
    required: ['number', 'seating_capacity', 'seat_arrangement', 'location'],
    additionalProperties: false,
    properties: {
        number: { type: 'number' },
        seating_capacity: { type: 'number' },
        seat_arrangement: { type: 'array' },
        location: { type: 'number' },
    }
}

const roomParams = {
    type: 'object',
    required: ['id'],
    additionalProperties: false,
    properties: {
        id: { type: 'number' },
    }
}

const roomQuery = {
    type: 'object',
    additionalProperties: false,
    properties: {
        page: { type: 'number' },
        limit: { type: 'number' },
    }
}


export const roomSchema: RouteShorthandOptions["schema"] = {
    response: {
        200: {
            type: 'array',
            items: room,
        }
    },
    body: roomBody,
    params: roomParams,
    querystring: roomQuery,
};