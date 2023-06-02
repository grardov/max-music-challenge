import { AppConfig } from "../../index";
import { config } from "../constants";

const API_URL = config.API_URL;
const API_KEY = config.API_KEY;

export async function getGenres(name: string): Promise<AppConfig.Genre[]> {
  const res = await fetch(`${API_URL}/genres?apikey=${API_KEY}&q=${name}`);
  const genres = await res.json();
  return genres.data;
}
