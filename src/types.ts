import { type Interface } from "readline";

export type APIResponse = {
  count: number;
  next: string;
  previous: string;
  results: any[];
};

export type PokemonResponse = {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  is_default: boolean;
  order: number;
  weight: number;
  abilities: any;
  forms: any;
  game_indices: any;
  held_items: any;
  location_area_encounters: any;
  moves: any;
  past_types: any;
  past_abilities: any;
  sprites: any;
  cries: any;
  species: any;
  stats: any;
  types: any;
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

export type CacheEntry<T> = {
  createdAt: number;
  val: T;
};

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  fnLocations: (pageURL?: string) => Promise<APIResponse>;
  fnLocationAreas: (locationName: string | number) => Promise<ShallowLocations>;
  fnCatchPokemon: (name: string) => Promise<PokemonResponse>;
  nextLocationsURL: string;
  prevLocationsURL: string;
  pokedex: Record<string, PokemonResponse>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};
