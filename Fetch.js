async function datesPeople() {
    try {
        const databasePeople = await fetch('https://swapi.dev/api/people/',
            { method: 'GET' });
        const jsonDataPeople = await databasePeople.json();
        const results = jsonDataPeople.results;
        const newArrayPeople = results.map((result) => {
            return {
                'eye_color': result['eye_color'],
                'hair_color': result['hair_color'],
                'height': result.height,
                'name': result.name,
            }
        });
        const filterPeople = newArrayPeople.filter((people) => people.height > 180);
        console.log(filterPeople);
    } catch (error) {
        console.error(error);
    }
}
datesPeople();

async function datesFilms() {
    try {
        const databaseFilms = await fetch('https://swapi.dev/api/films/',
            { method: 'GET' });
        const jsonDataFilms = await databaseFilms.json();
        const resultsFilms = jsonDataFilms.results;
        const newArrayFilms = resultsFilms.map((resultFilm) => {
            return {
                'director': resultFilm.director,
                'episode_id': resultFilm['episode_id'],
                'producer': resultFilm.producer,
                'title': resultFilm.title,
            }
        });
        const filterFilms = newArrayFilms.filter((film) => film['episode_id'] > 3);
        console.log(filterFilms);
    } catch (error) {
        console.error(error);
    }
}
datesFilms();
