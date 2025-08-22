import { Cache } from "./pokecache.js";
export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    #cache;
    constructor() {
        // expire items after 10 seconds
        this.#cache = new Cache(60_000);
    }
    async fetchLocations(pageURL) {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area?offset=0&limit=20`;
        const cached = this.#cache.get(url);
        if (cached) {
            return cached.val;
        }
        const res = await fetch(url);
        if (!res.ok)
            throw new Error("Failed to fetch locations");
        const val = await res.json();
        this.#cache.add(url, val);
        return val;
    }
    async fetchLocation(locationName) {
        return null;
    }
}
