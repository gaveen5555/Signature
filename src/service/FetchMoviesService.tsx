import config from '../../config';

export default class FetchMovies {
  static async get(popularMovie: string, page: number) {
    const url = `${config.API_URL}${config.API_KEY}&s=${popularMovie}&page=${page}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}
