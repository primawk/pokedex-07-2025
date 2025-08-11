export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string): Promise<APIResponse> {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch locations");
    return res.json();
  }

  async fetchLocation(locationName: string) {
    return null;
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
  pokemon_encounters: any;
};

export type Location = {
  id: number;
  name: string;
  region: any;
  names: any;
  game_indices: any;
  areas: any;
};
