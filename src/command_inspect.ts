import { CLICommand, State } from "./types";

export async function commandInspect(state: State, name: string) {
  if (!name) console.log("name is required.");
  for (const pokemon in state.pokedex) {
    if (!(name in state.pokedex)) {
      return console.log("you have not caught that pokemon");
    }
    if (name === pokemon) {
      return console.log(`
        name: ${state.pokedex[pokemon].name}
        height: ${state.pokedex[pokemon].height}
        stats: ${state.pokedex[pokemon].stats}
        type: ${state.pokedex[pokemon].types[0]['type']}
        `);
    }
  }
  console.log("You dont have any pokeomon.");
}
