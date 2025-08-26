import { State } from "./state";

export async function commandCatch(state: State, name: string) {
  try {
    const data = await state.fnCatchPokemon("clefairy");
    console.log(data);
  } catch (error) {
    if (error instanceof Error) {
      console.log(`An error was thrown: ${error}`);
    } else {
      console.log("An unknown error occurred:", error);
    }
  }
}
