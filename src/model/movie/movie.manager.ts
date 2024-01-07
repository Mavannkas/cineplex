import { MySQLPromisePool } from "@fastify/mysql";
import { getSingleItem } from "../../utils/manager.utils.js";
import { Movie } from "./movie.model.js";
import { PaginationParams } from "../../utils/search.utils.js";

export default class MovieManager {
  constructor(private mysql: MySQLPromisePool) {}

  async getMovieById(id: string): Promise<Movie> {
    const [item] = await this.mysql.query("SELECT * FROM Movies WHERE id = ?", [
      id,
    ]);

    return getSingleItem(item);
  }

  async getMovie(params?: PaginationParams) {
    const [item] = await this.mysql.query();
  }

  async createMovie(data: Omit<Movie, "id">) {
    await this.mysql.query("INSERT INTO Movie SET ?", [data]);
  }

  async deleteMovie(id: string) {
    await this.mysql.query("DELETE FROM Movie WHERE id = ?", [id]);
  }
}
