async function datesPokemon() {
    try {
        const databasePokemon = await fetch('https://pokeapi.co/api/v2/pokemon',
            { 'method': 'GET' });
        const pokemonJson = await databasePokemon.json();
        const results = pokemonJson.results;
        const newArrayPokemon = results.map((pokemon) => {
            return {
                name: pokemon.name,
            }
        })
        newArrayPokemon.sort(function (a, b) {
            if (a.name > b.name) {
                return 1;
            }
            if (a.name < b.name) {
                return -1;
            }
        });
        console.log(newArrayPokemon);
    } catch (error) {
        console.error(error);
    }
}
datesPokemon();