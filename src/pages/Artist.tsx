import { Link, useParams } from "react-router-dom";

import ArtistCard from "../components/ArtistCard";
import ArtistDetailCard from "../components/ArtistDetailCard";

import { useArtist } from "../hooks/useArtist";
import { useList } from "../hooks/useList";

export default function Artist() {
  const params = useParams();
  const { artists, relatedArtist, error, loading } = useArtist(
    params.id as string
  );
  const { addToList, removeFromList, isInTheList } = useList();

  if (loading) {
    return <div className="flex flex-row justify-center p-4">Loading...</div>;
  }

  return (
    <div className="w-full flex flex-col gap-4">
      <Link to="/">⬅️ Back to search</Link>
      {error && (
        <div className="flex flex-row justify-center p-4">
          Something wrong happened: ${error}
        </div>
      )}
      {!error && artists && (
        <>
          <ArtistDetailCard
            artist={artists}
            save={isInTheList(artists.id)}
            onClick={(artist, action) => {
              action === "add" ? addToList(artist) : removeFromList(artist);
            }}
          />
          <h3>Related artist:</h3>
          {relatedArtist.map((artist) => (
            <ArtistCard
              key={artist.id}
              artist={artist}
              save={isInTheList(artist.id)}
              onClick={(artist, action) => {
                action === "add" ? addToList(artist) : removeFromList(artist);
              }}
            />
          ))}
        </>
      )}
    </div>
  );
}
