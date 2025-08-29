import { commandExit } from "./command_exit.js";
import { commandHelp } from "./command_help.js";
import { commandMap } from "./command_map.js";
import { commandMapb } from "./command_mapb.js";
import { commandExplore } from "./command_explore.js";
import { commandCatch } from "./command_catch.js";
import { CLICommand } from "./types.js";
import { commandInspect } from "./command_inspect.js";
import { commandPokedex } from "./command_pokedex.js";

export function getCommands(): Record<string, CLICommand> {
  return {
    exit: {
      name: "exit",
      description: "Exits the pokedex",
      callback: commandExit,
    },
    help: {
      name: "help",
      description: "Displays a help message",
      callback: commandHelp,
    },
    map: {
      name: "map",
      description:
        "Displays the names of 20 location areas in the Pokemon world.",
      callback: commandMap,
    },
    mapb: {
      name: "mapb",
      description: "displays the previous 20 locations.",
      callback: commandMapb,
    },
    explore: {
      name: "explore",
      description: "see a list of all the Pokémon in a given area.",
      callback: commandExplore,
    },
    catch: {
      name: "catch",
      description: "try to catch a pokemon.",
      callback: commandCatch,
    },
    inspect: {
      name: "inspect",
      description: "inspect a pokemon.",
      callback: commandInspect,
    },
    pokedex: {
      name: "pokedex",
      description: "Show your pokemons.",
      callback: commandPokedex,
    },
  };
}
