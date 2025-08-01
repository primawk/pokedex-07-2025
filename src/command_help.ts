import { CLICommand } from "./cli_commands";

export function commandHelp(commands: Record<string, CLICommand>) {
  function renderUsage(commands: Record<string, CLICommand>) {
    let result = "";
    for (const command in commands) {
      result += `\n${command}: ${commands[command].description}`;
    }
    return result;
  }

  console.log(`Welcome to the Pokedex!
Usage:

${renderUsage(commands)}`);
}
