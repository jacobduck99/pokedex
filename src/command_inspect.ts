import type { State } from "./state.js";

export async function commandInspect(state: State, ...args: string[]) {
    const pokemonName = args[0];
    const caughtPokemon = state.pokedex[pokemonName];

    if (!caughtPokemon) { console.log("This pokemon not caught")}; 

    console.log("here is ur pokemon", caughtPokemon); }
