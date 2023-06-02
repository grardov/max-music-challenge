import { useState, useCallback, useRef } from "react";
import { getGenres } from "../services/genres";
import { AppConfig } from "../../index";

export function useGenre(search: string) {
  const [genres, setGenres] = useState<AppConfig.Genre[]>([]);
  const previousSearch = useRef(search);

  const searchGenre = useCallback(async (search: string) => {
    if (search === previousSearch.current) return;
    const genres = await getGenres(search);
    setGenres(genres);
  }, []);

  const clearGenres = () => {
    previousSearch.current = "";
    setGenres([]);
  };

  return { genres, searchGenre, clearGenres };
}
