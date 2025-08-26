import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
import { PokeAPI } from "./pokeapi.js";
import { APIResponse, PokemonResponse, ShallowLocations } from "./types.js";

const pokeAPI = new PokeAPI();

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  const commands = getCommands();
  const fnLocations = pokeAPI.fetchLocations.bind(pokeAPI);
  const fnLocationAreas = pokeAPI.fetchLocationAreas.bind(pokeAPI);
  const fnCatchPokemon = pokeAPI.catchPokemon.bind(pokeAPI);
  let nextLocationsURL = "";
  let prevLocationsURL = "";
  return {
    rl,
    commands,
    fnLocations,
    fnLocationAreas,
    fnCatchPokemon,
    nextLocationsURL,
    prevLocationsURL,
  };
}

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  fnLocations: (pageURL?: string) => Promise<APIResponse>;
  fnLocationAreas: (locationName: string | number) => Promise<ShallowLocations>;
  fnCatchPokemon: (name: string) => Promise<PokemonResponse>;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State, ...args: string[]) => Promise<void>;
};
