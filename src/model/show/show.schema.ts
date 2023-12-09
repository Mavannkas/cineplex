import { RouteShorthandOptions } from "fastify";

const show = {
    type: 'object',
    required: ['id', 'typ_seansu', 'sala', 'id_filmu', 'godzina', 'data', 'cena'],
    properties: {
        id: { type: "number" },
        typ_seansu: { type: "number" },
        sala: { type: "number" },
        id_filmu: { type: "number" },
        godzina: { type: "string" },
        data: { type: "string" },
        cena: { type: "string" },
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
