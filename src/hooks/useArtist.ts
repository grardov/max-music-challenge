import { useEffect, useState } from "react";
import { AppConfig } from "../../index";

import { getArtist, getRelatedArtist } from "../services/artists";
import {
  MaxConnectionErrorArtist,
  MaxConnectionErrorRelatedArtist,
} from "../utils/errors";

export function useArtist(id: string) {
  const [artists, setArtist] = useState<AppConfig.Artist | null>(null);
  const [relatedArtist, setRelatedArtist] = useState<AppConfig.Artist[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const searchArtist = async () => {
      setLoading(true);
      try {
        const [artist, related] = await Promise.all([
          getArtist(id),
          getRelatedArtist(id),
        ]);
        setArtist(artist);
        setRelatedArtist(related);
        setError("");
      } catch (error) {
        if (error instanceof MaxConnectionErrorArtist) {
          setError("Something wrong getting the artist detail.");
        }
        if (error instanceof MaxConnectionErrorRelatedArtist) {
          setError("Something wrong getting the related artists.");
        }
        setError("Something wrong happened!");
      } finally {
        setLoading(false);
      }
    };

    searchArtist();
  }, [id]);

  return { artists, relatedArtist, error, loading };
}
