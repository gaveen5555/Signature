import config from '../../config';

export default class FetchMovieDetails {
  static async get(imdbID: string) {
    const url = `${config.API_URL}${config.API_KEY}&i=${imdbID}`;
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
