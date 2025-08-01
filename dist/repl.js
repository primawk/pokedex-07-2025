import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
export function cleanInput(str) {
    return str.trim().toLowerCase().split(/\s+/);
}
export function startREPL() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });
    rl.prompt();
    const commands = getCommands();
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
                    commands[command].callback(commands);
                }
                catch (error) {
                    if (error instanceof Error) {
                        console.log(`An error was thrown: ${error}`);
                    }
                    else {
                        console.log("An unknown error occurred:", error);
                    }
                }
            }
        }
        rl.prompt();
    });
}
