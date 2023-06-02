import { AppConfig } from "../../index";
import { config } from "../constants";
import {
  MaxConnectionErrorArtist,
  MaxConnectionErrorGenderArtist,
  MaxConnectionErrorRelatedArtist,
} from "../utils/errors";

const API_URL = config.API_URL;
const API_KEY = config.API_KEY;

export async function getArtist(id: string): Promise<AppConfig.Artist> {
  try {
    const res = await fetch(`${API_URL}/artists/${id}?apikey=${API_KEY}`);
    const artist = await res.json();
    return artist.data[0];
  } catch (error) {
    throw new MaxConnectionErrorArtist(error as string);
  }
}

export async function getRelatedArtist(
  id: string
): Promise<AppConfig.Artist[]> {
  try {
    const res = await fetch(
      `${API_URL}/artists/${id}/similar?apikey=${API_KEY}`
    );
    const artist = await res.json();
    return artist.data;
  } catch (error) {
    throw new MaxConnectionErrorRelatedArtist(error as string);
  }
}

export async function getGenreArtist(id: number): Promise<AppConfig.Artist[]> {
  try {
    const res = await fetch(
      `${API_URL}/genres/${id}/artists?apikey=${API_KEY}`
    );
    const artist = await res.json();
    return artist.data;
  } catch (error) {
    throw new MaxConnectionErrorGenderArtist(error as string);
  }
}
