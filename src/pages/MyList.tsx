import { Link } from "react-router-dom";

import ArtistCard from "../components/ArtistCard";

import { useList } from "../hooks/useList";

export default function MyList() {
  const { list, addToList, removeFromList, isInTheList } = useList();
  return (
    <div>
      <Link to="/">⬅️ Back to search</Link>
      <h3>My List</h3>
      {list.length === 0 && <p>No artist in list.</p>}
      {list.length > 0 && (
        <div className="mt-8 w-full flex flex-col gap-3">
          {list.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              save={isInTheList(artist.id)}
              onClick={(artist, action) => {
                action === "add" ? addToList(artist) : removeFromList(artist);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
}
