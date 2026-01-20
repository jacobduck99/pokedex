export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
  }

    async fetchLocation(locationName: string): Promise<Location> {
    // implement this
  }
}

export type ShallowLocations = {
  // add properties here
};

export type Location = {
  // add properties here
};
