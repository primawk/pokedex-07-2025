import { PokemonResponse, State } from "./types";

export async function commandPokedex(state: State) {
  function renderUsage(pokedex: Record<string, PokemonResponse>) {
    let result = "";
    for (const pokemon in pokedex) {
      result += `\n- ${pokemon}`;
    }
    return result;
  }

  if (Object.keys(state.pokedex).length > 0) {
    console.log(`Your Pokedex:
        ${renderUsage(state.pokedex)}
        `);
  } else {
    console.log("You dont have any pokemon.");
  }
}
