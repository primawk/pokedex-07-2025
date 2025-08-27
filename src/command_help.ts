import { CLICommand, State } from "./types";

export async function commandHelp(commands: State) {
  function renderUsage(commands: Record<string, CLICommand>) {
    let result = "";
    for (const command in commands) {
      result += `\n${command}: ${commands[command].description}`;
    }
    return result;
  }

  console.log(`Welcome to the Pokedex!
Usage:

${renderUsage(commands.commands)}`);
}
