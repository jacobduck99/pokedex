import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]){
    let pokemonName = args[0];
    console.log(`Throwing a Pokeball at ${pokemonName}...`);
    const pokemon = await state.pokeAPI.fetchPokemon(`${pokemonName}`);
    console.log("this is ur pokemon", pokemon);
    console.log("heres base experience", pokemon.base_experience);
};

