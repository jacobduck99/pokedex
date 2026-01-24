import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    const pokemonName = args[0];
    const caughtPokemon = state.pokedex[pokemonName];

    if (!caughtPokemon) { console.log("This pokemon not caught")}; 
    
    console.log("Name:", caughtPokemon.name); 
    console.log("Base experience:", caughtPokemon.base_experience); 
    console.log("Height:", caughtPokemon.height); 
    console.log("Weight:", caughtPokemon.weight); 
    console.log("Stats:", caughtPokemon.stats.base_stats); 
    console.log("Types:", caughtPokemon.types); 
}

