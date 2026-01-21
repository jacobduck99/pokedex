export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2";

    constructor() {}

    async fetchLocations(pageURL?: string): Promise<ShallowLocations> {
        const url = pageURL || `${PokeAPI.baseURL}/location-area/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
  }

    async fetchLocation(locationName: string): Promise<Location> {
        const url = `${PokeAPI.baseURL}/location/`;
        const response = await fetch(url);
        const data = await response.json();
        return data;
  }
}

export type ShallowLocations = {
    id: number;
    name: string;
};

export type Location = {
    id: number;
    name: string;
};
