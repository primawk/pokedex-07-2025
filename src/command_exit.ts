import { CLICommand } from "./cli_commands";

export function commandExit(commands: Record<string, CLICommand>) {
  console.log("Closing the Pokedex... Goodbye!");
  process.exit(0);
}
