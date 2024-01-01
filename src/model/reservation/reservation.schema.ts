import { RouteShorthandOptions } from "fastify";

const reservationBody = {
    type: 'object',
    required: ['type', 'screening_id', 'seat', 'owner'],
    additionalProperties: false,
    properties: {
        type: { type: 'string' },
        screening_id: { type: 'number' },
        seat: { type: 'string', description: 'in format "row,col"' },
        owner: { type: 'string' },
    }
}


export const reservationSchema: RouteShorthandOptions["schema"] = {
    body: reservationBody,
};
