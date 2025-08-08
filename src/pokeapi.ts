export class PokeAPI {
  private static readonly baseURL = "https://pokeapi.co/api/v2";

  constructor() {}

  async fetchLocations(pageURL?: string) {
    const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }

      const result = await response.json();
      return result;
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log(`An error was thrown: ${error}`);
      } else {
        console.log("An unknown error occurred:", error);
      }
    }
  }

  async fetchLocation(locationName: string) {
    return null;
  }
}

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
