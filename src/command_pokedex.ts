import type { State } from "./state.js";

export async function commandPokedex(state: State, ...args: string[]) {
    const names = Object.keys(state.pokedex);

    if (names.length === 0) {
        console.log("Your Pokedex is empty. Catch some Pokemon first!");
    return;
    }

    console.log("Your Pokedex:");
    for (const name of names) {
    console.log(`- ${name}`);
    }
}
