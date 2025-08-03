import { State } from "./state.js";

export function cleanInput(str: string) {
  return str.trim().toLowerCase().split(/\s+/);
}

export function startREPL(state: State) {
  const rl = state.rl;
  const commands = state.commands;

  rl.prompt();
  rl.on("line", (input) => {
    if (input.length === 0) {
      rl.prompt();
      return;
    }
    for (const command in commands) {
      if (!(input in commands)) {
        console.log("unknown command");
        break;
      }
      if (input === command) {
        try {
          commands[command].callback(state);
        } catch (error) {
          if (error instanceof Error) {
            console.log(`An error was thrown: ${error}`);
          } else {
            console.log("An unknown error occurred:", error);
          }
        }
      }
    }

    rl.prompt();
  });
}
