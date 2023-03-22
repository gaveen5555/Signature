export interface Movie {
  Title: string;
  Year: string;
  Poster: string;
  imdbID: string;
}
export interface MovieDetails {
  Title: string;
  Year: string;
  Director: string;
  Plot: string;
  Poster: string;
  imdbID: string;
  imdbRating: number;
}
export interface MovieCardType {
  title: string;
  year: string;
  imdbID: string;
  poster: string;
  onSelect: (x: string) => void;
}
