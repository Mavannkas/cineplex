import { httpErrors } from "@fastify/sensible"

export const getSingleItem = <T>(dbResponse: unknown) => {
    if (!Array.isArray(dbResponse) || dbResponse.length === 0)
        throw httpErrors.notFound("Item not found")

    return (dbResponse?.[0] ?? {}) as T
}