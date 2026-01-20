import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
export function cleanInput(input) {
    return input
        .toLowerCase()
        .trim()
        .split(/\s+/)
        .filter(Boolean);
}
export function startREPL() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: " ",
    });
    rl.prompt();
    const commands = getCommands();
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
            handler.callback(commands);
        }
        catch (e) {
            console.log(e);
        }
        rl.prompt();
    });
}
