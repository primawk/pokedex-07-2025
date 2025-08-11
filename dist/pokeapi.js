export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("Failed to fetch locations");
        return res.json();
    }
    async fetchLocation(locationName) {
        return null;
    }
}
