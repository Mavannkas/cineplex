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
    premiere_date: { type: "string", format: "date" },
    cast: { type: "string" },
  },
};
const movieBody = {
  type: "object",
  required: [
    "title",
    "description",
    "minimum_age",
    "production_year",
    "duration",
    "director",
    "production_country",
    "premiere_date",
    "cast",
  ],
  additionalProperties: false,
  properties: {
    title: { type: "string" },
    description: { type: "string" },
    minimum_age: { type: "number" },
    production_year: { type: "number" },
    duration: { type: "number" },
    director: { type: "string" },
    production_country: { type: "string" },
    premiere_date: { type: "string", format: "date" },
    cast: { type: "string" },
  },
};

const movieParams = {
  type: "object",
  required: ["id"],
  additionalProperties: false,
  properties: {
    id: { type: "number" },
  },
};

const movieQuery = {
  type: "object",
  additionalProperties: false,
  poperties: {
    page: { type: "number" },
    limit: { type: "number" },
  },
};

export const movieSchema: RouteShorthandOptions["schema"] = {
  response: {
    200: {
      type: "array",
      items: movie,
    },
  },
  body: movieBody,
  params: movieParams,
  querystring: movieQuery,
};
