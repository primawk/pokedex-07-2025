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
