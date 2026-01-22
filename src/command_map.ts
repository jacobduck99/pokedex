import type { State } from "./state.js";

async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(); 
};
