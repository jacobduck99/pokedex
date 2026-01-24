import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    return {
        rl,
        commands: getCommands(),
        pokeAPI: new PokeAPI(),
        nextLocationsURL: "",
        prevLocationsURL: "",
        pokedex: {},
    };
}
