import { Cache } from "./pokecache.js";
import { APIResponse, PokemonResponse, ShallowLocations } from "./types.js";

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

  async catchPokemon(name: string): Promise<PokemonResponse> {
    if (!name) throw new Error("pokemon name is required!");
    const url = `${PokeAPI.baseURL}/pokemon/${name}`;

    const cached = this.#cache.get<PokemonResponse>(url);

    if (cached) {
      return cached.val;
    }
    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch pokemon");
    const val: PokemonResponse = await res.json();
    this.#cache.add<PokemonResponse>(url, val);

    return val;
  }

  async fetchLocationAreas(
    locationName: string | number
  ): Promise<ShallowLocations> {
    if (!locationName) throw new Error("location name is required!");
    const url = `${PokeAPI.baseURL}/location-area/${locationName}`;
    const cached = this.#cache.get<ShallowLocations>(url);

    if (cached) {
      console.log("fetching from cached");
      return cached.val;
    }

    const res = await fetch(url);

    if (!res.ok) throw new Error("Failed to fetch location areas");
    const val: ShallowLocations = await res.json();
    this.#cache.add<ShallowLocations>(url, val);
    console.log("fetching from api");
    return val;
  }
}
