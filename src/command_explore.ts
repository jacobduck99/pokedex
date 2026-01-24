import type { State } from "./state.js";

export async function commandExplore(state: State, ...args: string[]) {
    let locationArea = args[0];
    console.log(`Exploring ${locationArea}...`);
    const location = await state.pokeAPI.fetchLocation(`${locationArea}`);
    for (const pokemons of location.pokemon_encounters) {
        console.log(` - ${pokemons.pokemon.name}`);
    } 

    
}

