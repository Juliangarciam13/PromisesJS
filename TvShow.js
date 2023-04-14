async function datesTvShow() {
    try{
    const databaseTvShow = await fetch('http://api.tvmaze.com/search/shows?q=golden girls',
        { 'method': 'GET' });
    const tvShowJson = await databaseTvShow.json();
    const newArrayTvShow = tvShowJson.map((tvShow) => {
        return {
            score: tvShow.score,
            id: tvShow.show['id'],
            name: tvShow.show['name'],
            language: tvShow.show['language'],
            premiered: tvShow.show['premiered'],
        }
    })
    const filterTvShow = newArrayTvShow.filter((filterTv) => filterTv.id === 722);
    console.log(filterTvShow);
} catch (error){
    console.log(error)
}
}
datesTvShow();

