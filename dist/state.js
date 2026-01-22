import { createInterface } from "node:readline";
import { getCommands } from "./commands.js";
import { PokeAPI } from "./pokeapi.js";
export function initState() {
    const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: "Pokedex > ",
    });
    const pokeAPI = new PokeAPI();
    const nextLocationsURL = "";
    const prevLocationsURL = "";
    const commands = getCommands();
    return { rl, commands, pokeAPI, nextLocationsURL, prevLocationsURL };
}
