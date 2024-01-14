import { MySQLPromisePool } from "@fastify/mysql";
import { getSingleItem } from "../../utils/manager.utils.js";
import { Movie, MoviePaginationParams } from "./movie.model.js";
import { searchMoviePaginationParamsConditions } from "../../utils/search.utils.js";

export default class MovieManager {
  constructor(private mysql: MySQLPromisePool) {}

  async getMovieById(id: number): Promise<Movie> {
    const [item] = await this.mysql.query("SELECT * FROM Movies WHERE id = ?", [
      id,
    ]);
    return getSingleItem(item);
  }

  async getMovies(params?: MoviePaginationParams): Promise<Movie[]> {
    const { query, queryParams } =
      searchMoviePaginationParamsConditions(params);

    const sqlQuery = `SELECT * FROM Movies ${query}`;

    const [item] = await this.mysql.query(sqlQuery, queryParams);
    return item as Movie[];
  }

  async createMovie(data: Omit<Movie, "id">) {
    await this.mysql.query("INSERT INTO Movies SET ?", [data]);
  }

  async deleteMovie(id: string) {
    await this.mysql.query("DELETE FROM Movies WHERE id = ?", [id]);
  }
}
