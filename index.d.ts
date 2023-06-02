export namespace AppConfig {
  type ApiResponse<T = Record<string, string | number | boolean>> = {
    success: number;
    data: T;
    errors: any[];
    notifications: any[];
  };

  type Genre = {
    id: number;
    parent_id: number;
    name: string;
  };

  type GenreArtist = {
    id: number;
    is_primary: number;
    name: string;
  };

  type Artist = {
    id: number;
    name: string;
    image: string;
    popularity: number;
    genres: GenreArtist[];
  };
}
