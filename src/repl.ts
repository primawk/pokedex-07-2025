import { State } from "./types.js";
import { getAfterCatch, getAfterExplore, getAfterInspect } from "./utils.js";

export function cleanInput(str: string) {
  return str.trim().toLowerCase().split(/\s+/);
}

export async function startREPL(state: State) {
  const rl = state.rl;
  const commands = state.commands;

  rl.prompt();
  rl.on("line", (input) => {
    if (input.length === 0) {
      rl.prompt();
      return;
    }
    for (const command in commands) {
      if (/\bexplore\b/i.test(input)) {
        try {
          return commands["explore"].callback(state, getAfterExplore(input));
        } catch (error) {
          if (error instanceof Error) {
            console.log(`An error was thrown: ${error}`);
          } else {
            console.log("An unknown error occurred:", error);
          }
        } finally {
          rl.prompt();
        }
      } else if (/\bcatch\b/i.test(input)) {
        try {
          return commands["catch"].callback(state, getAfterCatch(input));
        } catch (error) {
          if (error instanceof Error) {
            console.log(`An error was thrown: ${error}`);
          } else {
            console.log("An unknown error occurred:", error);
          }
        } finally {
          rl.prompt();
        }
      } else if (/\binspect\b/i.test(input)) {
        try {
          return commands["inspect"].callback(state, getAfterInspect(input));
        } catch (error) {
          if (error instanceof Error) {
            console.log(`An error was thrown: ${error}`);
          } else {
            console.log("An unknown error occurred:", error);
          }
        } finally {
          rl.prompt();
        }
      } else {
        if (!(input in commands)) {
          console.log("unknown command");
          rl.prompt();
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
          } finally {
            rl.prompt();
          }
        }
      }
    }
  });
}
