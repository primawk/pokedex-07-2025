import { CLICommand, State } from "./state.js";

export async function commandMapb(pageURL?: string) {
  const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch locations");
  return res.json();
}
