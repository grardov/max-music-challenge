import { AppConfig } from "../../index";
import { config } from "../constants";
import { MaxConnectionErrorGender } from "../utils/errors";

const API_URL = config.API_URL;
const API_KEY = config.API_KEY;

export async function getGenres(name: string): Promise<AppConfig.Genre[]> {
  try {
    const res = await fetch(`${API_URL}/genres?apikey=${API_KEY}&q=${name}`);
    const genres = await res.json();
    return genres.data;
  } catch (error) {
    throw new MaxConnectionErrorGender(error as string);
  }
}
