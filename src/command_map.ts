import type { State } from "./state.js";

export async function commandMap(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);

    state.nextLocationsURL = locations.next;


  for (const loc of locations.results) {
    console.log(loc.name);
  }
}

export async function commandMapB(state: State): Promise<void> {
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);

    state.prevLocationsURL = locations.previous;

  for (const loc of locations.results) {
    console.log(loc.name);
  }
}


