import { State } from "./types.js";
import { getRandomInt } from "./utils.js";

export async function commandCatch(state: State, name: string) {
  try {
    console.log(`Throwing a Pokeball at ${name}...`);
    const data = await state.fnCatchPokemon(name);
    // const catched = getRandomInt(data?.base_experience + 1);
    console.log(`${name} was caught!`);
    state.pokedex[name] = data;
  } catch (error) {
    if (error instanceof Error) {
      console.log(`An error was thrown: ${error}`);
    } else {
      console.log("An unknown error occurred:", error);
    }
  }
}
