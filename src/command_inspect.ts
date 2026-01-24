import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    const pokemonName = args[0];
    const caughtPokemon = state.pokedex[pokemonName];

    if (!caughtPokemon) { console.log("you have not caught that pokemon") 
        return;
    }; 
    
    console.log("Name:", caughtPokemon.name); 
    console.log("Height:", caughtPokemon.height); 
    console.log("Weight:", caughtPokemon.weight); 
    console.log("Types:");
    for (const t of caughtPokemon.types) {
    console.log(`- ${t.type.name}`);
    }

    console.log("Stats:");
    for (const s of caughtPokemon.stats) {
    console.log(`- ${s.stat.name}: ${s.base_stat}`);
    }
}

