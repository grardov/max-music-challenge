import { useState, useCallback, useRef } from "react";
import { getGenres } from "../services/genres";
import { AppConfig } from "../../index";
import { MaxConnectionErrorGender } from "../utils/errors";

export function useGenre(search: string) {
  const [genres, setGenres] = useState<AppConfig.Genre[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const previousSearch = useRef(search);

  const searchGenre = useCallback(async (search: string) => {
    if (search === previousSearch.current) return;
    setLoading(true);
    try {
      const genres = await getGenres(search);
      setGenres(genres);
      setError("");
    } catch (error) {
      if (error instanceof MaxConnectionErrorGender) {
        setError("Something wrong getting the artist detail.");
      }
      setError("Something wrong happened!");
    } finally {
      setLoading(false);
    }
  }, []);

  const clearGenres = () => {
    previousSearch.current = "";
    setGenres([]);
  };

  return { genres, searchGenre, clearGenres, error, loading };
}
