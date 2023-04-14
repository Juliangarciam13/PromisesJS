async function dataRickMorty(){
    const dataRickMorty = await fetch('https://rickandmortyapi.com/api/character',
    { 'method': 'GET' });
    const rickMortyJson = await dataRickMorty.json();
    const newArrayRickMorty = rickMortyJson.map((char) => {
        return {
            name: char.name,
            species: char.species,
            gender: char.gender,
        }
    })
    console.log(newArrayRickMorty);
}
dataRickMorty();