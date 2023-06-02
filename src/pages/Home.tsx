import { useState } from "react";
import debounce from "just-debounce-it";

import ArtistCard from "../components/ArtistCard";

import { useGenre } from "../hooks/useGenre";
import { AppConfig } from "../../index";
import { getGenreArtist } from "../services/artists";
import { useList } from "../hooks/useList";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<AppConfig.Artist[]>([]);
  const { addToList, removeFromList, isInTheList } = useList();
  const { genres, searchGenre, clearGenres } = useGenre(search);

  const handleClick = async (genre: AppConfig.Genre) => {
    setSearch(genre.name);
    clearGenres();
    const artist = await getGenreArtist(genre.id);
    setResults(artist);
  };

  const debouncedSearchGenres = debounce((search: string) => {
    searchGenre(search);
  }, 300);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
    debouncedSearchGenres(value);
  };

  return (
    <div className="w-full">
      <label className="relative w-96" htmlFor="search">
        Enter a genre to find artist:
        <input
          className="w-full mt-1"
          value={search}
          type="text"
          placeholder="Rock, Alternative, Blues, etc."
          onChange={handleChange}
        />
        {search && genres.length > 0 && (
          <ul className="absolute top-16 left-0 bg-white w-full flex flex-col gap-1 shadow-lg rounded list-none pl-0 max-h-96 overflow-hidden overflow-y-scroll cursor-pointer">
            {genres.map((genre) => (
              <li
                key={genre.id}
                className="p-2 hover:bg-slate-100"
                onClick={() => handleClick(genre)}
              >
                {genre.name}
              </li>
            ))}
          </ul>
        )}
      </label>
      <div className="mt-8 w-full flex flex-col gap-3">
        {results.map((result, key) => (
          <ArtistCard
            key={key}
            artist={result}
            save={isInTheList(result.id)}
            onClick={(artist, action) => {
              action === "add" ? addToList(artist) : removeFromList(artist);
            }}
          />
        ))}
      </div>
    </div>
  );
}
