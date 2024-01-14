import { PaginationParams } from "../../utils/search.utils.js";

export interface Movie {
  id: number;
  title: string;
  description: string;
  minimum_age: number;
  production_year: number;
  duration: number;
  director: string;
  production_country: string;
  premiere_date: Date;
  cast: string;
}

export type MoviePaginationParams = Omit<Movie, "id"> & PaginationParams;

export const isMovie = (obj: any): obj is Movie => {
  const keys = Object.keys(obj) as Array<keyof Movie>;
  return typeof obj === "object" && keys.every((key) => key in obj);
};
