import { AppConfig } from "../../index";

type ArtistDetailCardProps = {
  artist: AppConfig.Artist;
  save: boolean;
  onClick: (artist: AppConfig.Artist, action: "add" | "remove") => void;
};

export default function ArtistDetailCard(props: ArtistDetailCardProps) {
  return (
    <article className="flex flex-col gap-3 p-5 border border-solid border-[#e5e7eb] rounded">
      <div className="flex flex-row gap-3 items-center">
        <img
          className="w-20 h-20 aspect-square rounded"
          src={props.artist.image}
          alt={props.artist.name}
        />
        <div className="w-full flex flex-col gap-1">
          <span className="text-md font-semibold">{props.artist.name}</span>
          <span className="text-xs text-[#6b7280]">
            Primary genre:{" "}
            {props.artist.genres
              .filter((genre) => genre.is_primary === 1)
              .map((genre) => genre.name)
              .join(", ")}
          </span>
          <span className="text-xs text-[#6b7280]">
            Popularity Score: {props.artist.popularity}
          </span>
        </div>
      </div>
      <div className="flex flex-row items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-md font-semibold">Additional Genres:</span>
          {props.artist.genres.length > 0 && (
            <span className="text-xs text-[#6b7280]">
              {props.artist.genres
                .filter((genre) => genre.is_primary !== 1)
                .map((genre) => genre.name)
                .join(", ")}
              {props.artist.genres
                .filter((genre) => genre.is_primary !== 1)
                .map((genre) => genre.name).length === 0 &&
                "No additional genres."}
            </span>
          )}
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
      </div>
    </article>
  );
}
