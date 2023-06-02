import { AppConfig } from "../../index";
import { config } from "../constants";

const API_URL = config.API_URL;
const API_KEY = config.API_KEY;

export async function getArtist(id: string): Promise<AppConfig.Artist> {
  const res = await fetch(`${API_URL}/artists/${id}?apikey=${API_KEY}`);
  const artist = await res.json();
  return artist.data[0];
}

export async function getRelatedArtist(
  id: string
): Promise<AppConfig.Artist[]> {
  const res = await fetch(`${API_URL}/artists/${id}/similar?apikey=${API_KEY}`);
  const artist = await res.json();
  return artist.data;
}

export async function getGenreArtist(id: number): Promise<AppConfig.Artist[]> {
  const res = await fetch(`${API_URL}/genres/${id}/artists?apikey=${API_KEY}`);
  const artist = await res.json();
  return artist.data;
}
