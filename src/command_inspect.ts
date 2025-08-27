import { CLICommand, State } from "./types";

export async function commandInspect(state: State, name: string) {
  for (const pokemon in state.pokedex) {
    if (!(name in state.pokedex)) {
      return console.log("you have not caught that pokemon");
    }
    if (name === pokemon) {
      return console.log(pokemon);
    }
  }
}
