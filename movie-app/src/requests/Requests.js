

const API_KEY = "0bfe5a1e3f30cdf946fbdc0290721647";

const requests = {
  // fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=123`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
//https://api.themoviedb.org/3/trending/all/week?api_key=0bfe5a1e3f30cdf946fbdc0290721647&language=en-US
export default requests;
// https://image.tmdb.org/t/p/original/trending/all/week?api_key=0bfe5a1e3f30cdf946fbdc0290721647&language=en-US