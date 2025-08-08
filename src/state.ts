import { createInterface, type Interface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
import { ShallowLocations } from "./pokeapi.js";

export function initState(): State {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });
  const commands = getCommands();
  // const fetchLocations = fetchLocations()
  return { rl, commands };
}

export type State = {
  rl: Interface;
  commands: Record<string, CLICommand>;
  // fetchLocations: (pageURL: string) => Promise<ShallowLocations>;
};

export type CLICommand = {
  name: string;
  description: string;
  callback: (state: State) => void;
};
