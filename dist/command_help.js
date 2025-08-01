export function commandHelp(commands) {
    function renderUsage(commands) {
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
