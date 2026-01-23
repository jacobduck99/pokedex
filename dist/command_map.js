export async function commandMap(state) {
    const locations = await state.pokeAPI.fetchLocations(state.nextLocationsURL);
    console.log("this is ur next", locations);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
export async function commandMapB(state) {
    if (!state.prevLocationsURL) {
        console.log("you're on the first page");
        return;
    }
    const locations = await state.pokeAPI.fetchLocations(state.prevLocationsURL);
    state.nextLocationsURL = locations.next;
    state.prevLocationsURL = locations.previous;
    console.log("this is ur prev", locations);
    for (const loc of locations.results) {
        console.log(loc.name);
    }
}
