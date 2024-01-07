import { RouteShorthandOptions } from "fastify";

export const movie = {
  type: "object",
  additonalProperies: false,
  properties: {
    id: { type: "number" },
    title: { type: "string" },
    description: { type: "string" },
    minimum_age: { type: "number" },
    production_year: { type: "number" },
    duration: { type: "number" },
    director: { type: "string" },
    production_country: { type: "string" },
    premiere_date: { type: "Date" },
    cast: { type: "string" },
  },
};
