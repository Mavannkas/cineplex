import { MoviePaginationParams } from "../model/movie/movie.manager.js";

export interface PaginationParams {
  page?: number;
  limit?: number;
}

export const isPaginationParams = (obj: any): obj is PaginationParams => {
  return typeof obj === "object" && (obj.page || obj.limit);
};

export const queryWithPagination = (
  query: string,
  params: (string | number)[],
  pagination?: PaginationParams
): [string, (string | number)[]] => {
  const { page = 0, limit = 10 } = pagination ?? {};
  const offset = page * limit;
  return [`${query} LIMIT ?, ?`, [...params, +offset, +limit]];
};

export function searchMoviePaginationParamsConditions(
  params?: MoviePaginationParams
): {
  query: string;
  queryParams: any[];
} {
  const conditions: string[] = [];
  const queryParams: any[] = [];

  Object.keys(params).forEach((param) => {
    if (params[param]) {
      conditions.push(`${param} LIKE ?`);
      queryParams.push(`%${params[param]}%`);
    }
  });

  const query =
    conditions.length > 0 ? 'WHERE ${conditions.join(" AND ")}' : "";

  return { query, queryParams };
}
