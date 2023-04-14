async function datesCountries() {
    try {
        const databaseCountries = await fetch('https://restcountries.com/v3.1/all',
            { "method": 'GET' });
        const countriesJson = await databaseCountries.json();
        const arrayCountries = countriesJson.map((country) => {
            return {
                name: country.name,
                region: country.region,
                languages: country.languages,
                capital: country.capital,
            }
        });
        const filterCountries = arrayCountries.filter((filterCountry) => filterCountry.region === 'Europe');     
        console.log(filterCountries);
    } catch (error) {
        console.error(error);
    }
}
datesCountries();