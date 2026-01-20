import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: " ",
    });
    const commands = getCommands();
    return { rl, commands };
}
