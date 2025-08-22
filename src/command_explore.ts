import { State } from "./state";

export async function commandExplore(
  state: State,
  locationName: string | number
) {
  try {
    const data = await state.fnLocationAreas(locationName);

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
