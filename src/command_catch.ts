import type { State } from "./state.js";

export async function commandCatch(state: State, ...args: string[]) {
      const pokemonName = args[0];
      if (!pokemonName) {
        console.log("Usage: catch <pokemon_name>");
        return;
      }

      console.log(`Throwing a Pokeball at ${pokemonName}...`);

      const pokemon = await state.pokeAPI.fetchPokemon(pokemonName);

      const baseExperience = pokemon.base_experience;
      console.log("Base experience:", baseExperience);
 
      let catchChance = 0.0;

      if (baseExperience <= 50) {
        catchChance = 0.7; // easy
      } else if (baseExperience <= 100) {
        catchChance = 0.5; // medium
      } else if (baseExperience <= 200) {
        catchChance = 0.35; // hard
      } else {
        catchChance = 0.2; // very hard
      }

      const roll = Math.random();

      console.log("Catch chance:", catchChance);

      if (roll < catchChance) {
        console.log(`You caught ${pokemon.name}!`);
        state.pokedex[pokemon.name] = pokemon; 
      } else {
        console.log(`${pokemon.name} escaped!`);
      }
}
