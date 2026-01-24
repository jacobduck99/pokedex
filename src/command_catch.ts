import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]){
    let pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
};

