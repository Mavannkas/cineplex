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
