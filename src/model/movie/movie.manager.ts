import { MySQLPromisePool } from "@fastify/mysql";
import { getSingleItem } from "../../utils/manager.utils.js";
import { Movie } from "./movie.model.js";
import {
  PaginationParams,
  searchMoviePaginationParamsConditions,
} from "../../utils/search.utils.js";

export default class MovieManager {
  constructor(private mysql: MySQLPromisePool) {}

  async getMovie(params?: MoviePaginationParams) {
    const { query, queryParams } =
      searchMoviePaginationParamsConditions(params);

    const sqlQuery = `SELECT * FROM Movies ${query}`;

    const [item] = await this.mysql.query(sqlQuery, queryParams);
    return getSingleItem(item);
  }

  async createMovie(data: Omit<Movie, "id">) {
    await this.mysql.query("INSERT INTO Movies SET ?", [data]);
  }

  async deleteMovie(id: string) {
    await this.mysql.query("DELETE FROM Movies WHERE id = ?", [id]);
  }
}

interface MoviePaginationParams extends PaginationParams {
  title?: string;
  description?: string;
  minimum_age?: number;
  production_year?: number;
  duration?: number;
  director?: string;
  production_country?: string;
  premiere_date?: Date;
  cast?: string;
}
