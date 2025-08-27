import { State } from "./types";

export async function commandMap(state: State) {
  try {
    const data = state?.nextLocationsURL
      ? await state.fnLocations(state?.nextLocationsURL)
      : await state.fnLocations();
    state.nextLocationsURL = data?.next;
    state.prevLocationsURL = data?.previous;
    console.log(data.results?.map((item) => item.name));
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
