import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
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
    rl.on("line", (input) => {
        if (input.length === 0) {
            rl.prompt();
            return;
        }
        const cleanseInput = cleanInput(input);
        console.log(`Your command was: ${cleanseInput[0]}`);
        rl.prompt();
    });
}
