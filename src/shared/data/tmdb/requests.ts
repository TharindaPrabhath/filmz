import { API_KEY } from "./meta";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=em-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=em-US`,
    fetchMostPopular: `/discover/movie?api_key=${API_KEY}&sort_by=popularity.desc`,
    fetchNowPlaying: `/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1`,
    fetchNewArrivals: `/movie/latest?api_key=${API_KEY}&language=en-US`,
    fetchUpcoming: `/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
}

export default requests;

