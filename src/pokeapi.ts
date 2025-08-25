import { Cache } from "./pokecache.js";

export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";
  #cache: Cache;

  constructor() {
    // expire items after 10 seconds
    this.#cache = new Cache(60_000);
  }

  async fetchLocations(pageURL?: string): Promise<APIResponse> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;

    const cached = this.#cache.get<APIResponse>(url);

    if (cached) {
      return cached.val;
    }
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch locations");
    const val: APIResponse = await res.json();
    this.#cache.add<APIResponse>(url, val);

    return val;
  }

  async fetchLocationAreas(
    locationName: string | number
  ): Promise<ShallowLocations> {
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch locations");

    return res.json();
  }
}

export type APIResponse = {
  count: number;
  next: string;
  previous: string;
  results: any[];
};

export type ShallowLocations = {
  id: number;
  name: string;
  game_index: number;
  encounter_method_rates: any;
  location: Location;
  names: any;
  pokemon_encounters: PokemonList[];
};

export type PokemonList = {
  pokemon: { name: string; url: string };
  version_details: any;
};

export type Location = {
  id: number;
  name: string;
  region: any;
  names: any;
  game_indices: any;
  areas: any;
};
