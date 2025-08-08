export class PokeAPI {
    static baseURL = "https://pokeapi.co/api/v2";
    constructor() { }
    async fetchLocations(pageURL) {
        const url = pageURL ?? `${PokeAPI.baseURL}/location-area`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const result = await response.json();
            return result;
        }
        catch (error) {
            if (error instanceof Error) {
                console.log(`An error was thrown: ${error}`);
            }
            else {
                console.log("An unknown error occurred:", error);
            }
        }
    }
    async fetchLocation(locationName) {
        return null;
    }
}
