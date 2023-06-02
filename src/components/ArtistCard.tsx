import { Link } from "react-router-dom";

import { AppConfig } from "../../index";

type ArtistCardProps = {
  artist: AppConfig.Artist;
  save: boolean;
  onClick: (artist: AppConfig.Artist, action: "add" | "remove") => void;
};

export default function ArtistCard(props: ArtistCardProps) {
  return (
    <article className="flex flex-row gap-3 items-center p-5 border border-solid border-[#e5e7eb] rounded">
      <img
        className="w-20 h-20 aspect-square rounded"
        src={props.artist.image}
        alt={props.artist.name}
      />
      <div className="w-full flex flex-col gap-1">
        <Link
          to={`/artist/${props.artist.id}`}
          className="text-md font-semibold"
        >
          {props.artist.name}
        </Link>
        <span className="text-xs text-[#6b7280]">
          {props.artist.genres.map((genre) => genre.name).join(", ")}
        </span>
      </div>
      <button
        className={`${props.save ? "bg-red-500 text-white" : ""}`}
        onClick={() => {
          if (props.save) props.onClick(props.artist, "remove");
          if (!props.save) props.onClick(props.artist, "add");
        }}
      >
        {props.save ? "Remove" : "Add"}
      </button>
    </article>
  );
}
