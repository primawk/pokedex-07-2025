import { PokemonList, State } from "./types";

export async function commandExplore(
  state: State,
  locationName: string | number
) {
  function renderPokemons(pokemonList: PokemonList[]) {
    let result = "";

    for (const pokemon in pokemonList) {
      result += `- ${pokemonList[pokemon]?.pokemon?.name}\n`;
    }

    return result;
  }
  try {
    const data = await state.fnLocationAreas(locationName);

    console.log(`
Exploring ${locationName}...
Found Pokemon: 
${renderPokemons(data?.pokemon_encounters)}`);

    state.rl.prompt();
  } catch (error) {
    if (error instanceof Error) {
      console.log(`An error was thrown: ${error}`);
    } else {
      console.log("An unknown error occurred:", error);
    }
  }
  return;
}
