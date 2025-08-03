import { createInterface } from "readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./cli_commands.js";
export function initState() {
    const rl = createInterface({
        input: stdin,
        output: stdout,
        prompt: "Pokedex > ",
    });
    const commands = getCommands();
    return { rl, commands };
}
