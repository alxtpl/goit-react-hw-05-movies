import axios from "axios"
// https://api.themoviedb.org/3/movie/550?api_key=4e2529a8b08d99422958baf4f619d12a
axios.defaults.baseURL = 'https://api.themoviedb.org';
axios.defaults.params = {
  api_key: '4e2529a8b08d99422958baf4f619d12a',
  language: 'en-US',
};

export const getMoviesList = () => {
    return axios
      .get('/3/trending/movie/day')
      .then(res => res.data.results)
      .catch(error => {
        throw error;
      });
};
  
export const getMoviesDetails = id => {
    return axios
      .get(`/3/movie/${id}`)
      .then(res => res.data)
      .catch(error => {
        throw error;
      });
};
  
export const getMovieCast = id => {
    return axios
      .get(`/3/movie/${id}/credits`)
      .then(res => res.data.cast)
      .catch(error => {
        throw error;
      });
  };
  
  export const getMovieReviews = id => {
    return axios
      .get(`/3/movie/${id}/reviews`)
      .then(res => res.data.results)
      .catch(error => {
        throw error;
      });
  };
  
  export const searchMovies = query => {
    return axios
      .get(`/3/search/movie?query=${query}`)
      .then(res => res.data.results)
      .catch(error => {
        throw error;
      });
  };