import { createInterface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
import { PokeAPI } from "./pokeapi.js";
const pokeAPI = new PokeAPI();
export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    const fnLocations = pokeAPI.fetchLocations;
    let nextLocationsURL = "";
    let prevLocationsURL = "";
    return { rl, commands, fnLocations, nextLocationsURL, prevLocationsURL };
}
