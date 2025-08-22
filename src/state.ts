import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
import { APIResponse } from "./pokeapi.js";
import { PokeAPI } from "./pokeapi.js";

const pokeAPI = new PokeAPI();

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  const commands = getCommands();
  const fnLocations = pokeAPI.fetchLocations.bind(pokeAPI);
  let nextLocationsURL = "";
  let prevLocationsURL = "";
  return { rl, commands, fnLocations, nextLocationsURL, prevLocationsURL };
}

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  fnLocations: (pageURL?: string) => Promise<APIResponse>;
  nextLocationsURL: string;
  prevLocationsURL: string;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => Promise<void>;
};
