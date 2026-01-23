export async function commandMap(state) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    state.nextLocationsURL = locations.next;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
export async function commandMapB(state) {
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.prevLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
