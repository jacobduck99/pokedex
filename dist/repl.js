import { initState } from "./state.js";
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}
export function startREPL() {
    const state = initState();
    const { rl, commands } = state;
    rl.prompt();
    rl.on("line", (line) => {
        const words = cleanInput(line);
        if (words.length === 0) {
            rl.prompt();
            return;
        }
        const command = words[0];
        const handler = commands[command];
        if (!handler) {
            console.log("Unknown command");
            rl.prompt();
            return;
        }
        try {
            handler.callback(state);
        }
        catch (e) {
            console.error(e);
        }
        rl.prompt();
    });
}
