const API_KEY = "1cad27577701eb23d70cded17e3e0ac0";
//https://api.themoviedb.org/3/movie/550?api_key=1cad27577701eb23d70cded17e3e0ac0

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en=US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
    fetchTopRates:`/movies/top_rated?api_key=${API_KEY}&language=en=US`,
    fetchActionMovies:`/discover/movie?api_key=${API_KEY}&with_generes=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&with_generes=10749`,
    fetchRecommended:`/discover/movie?api_key=${API_KEY}&primary_release_year=2017&sort_by=revenue.desc`
}

export default requests; 

///discover/movie?api_key=1cad27577701eb23d70cded17e3e0ac0&with_generes=99