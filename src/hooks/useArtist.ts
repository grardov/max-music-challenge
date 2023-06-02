import { useEffect, useState } from "react";
import { AppConfig } from "../../index";

import { getArtist, getRelatedArtist } from "../services/artists";

export function useArtist(id: string) {
  const [artists, setArtist] = useState<AppConfig.Artist | null>(null);
  const [relatedArtist, setRelatedArtist] = useState<AppConfig.Artist[]>([]);

  useEffect(() => {
    const searchArtist = async () => {
      try {
        const [artist, related] = await Promise.all([
          getArtist(id),
          getRelatedArtist(id),
        ]);
        setArtist(artist);
        setRelatedArtist(related);
      } catch (error) {
        console.error(error);
      }
    };

    searchArtist();
  }, [id]);

  return { artists, relatedArtist };
}
