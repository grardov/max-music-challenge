import { useEffect, useState, useCallback } from "react";
import { AppConfig } from "../../index";

import { getArtist, getRelatedArtist } from "../services/artists";

export function useArtist(id: string) {
  const [artists, setArtist] = useState<AppConfig.Artist | null>(null);
  const [relatedArtist, setRelatedArtist] = useState<AppConfig.Artist[]>([]);

  const searchArtist = useCallback(async () => {
    try {
      const artist = await getArtist(id);
      const related = await getRelatedArtist(id);
      setArtist(artist);
      setRelatedArtist(related);
    } catch (error) {
      console.error(error);
    }
  }, [id]);

  useEffect(() => {
    searchArtist();
  }, [searchArtist]);

  return { artists, relatedArtist };
}
