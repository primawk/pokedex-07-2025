import { State } from "./types";


export async function commandMapb(state: State) {
  if (!state?.prevLocationsURL) {
    state.nextLocationsURL = "";
    return console.log("you're on the first page");
  }
  try {
    const data = await state.fnLocations(state?.prevLocationsURL);
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
}
