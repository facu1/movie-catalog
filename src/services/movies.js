import axios from 'axios'

const tmdbKey = import.meta.env.VITE_TMDB_KEY

const baseUrl = 'https://api.themoviedb.org/3'

const movieSectionUrl = (path) => `${baseUrl}/movie${path}?api_key=${tmdbKey}`

const getPopular = async () => {
  const response = await axios.get(`${movieSectionUrl('/popular')}`)
  return response.data
}

const getNowPlaying = async () => {
  const response = await axios.get(`${movieSectionUrl('/now_playing')}`)
  return response.data
}

const getUpcoming = async () => {
  const response = await axios.get(`${movieSectionUrl('/upcoming')}`)
  return response.data
}

const getDetails = async (movieId) => {
  const response = await axios.get(`${movieSectionUrl(`/${movieId}`)}`)
  return response.data
}

const getSimilarMovies = async (movieId) => {
  const response = await axios.get(`${movieSectionUrl(`/${movieId}/similar`)}`)
  return response.data
}

const getSearch = async (queryText) => {
  const response = await axios.get(`${baseUrl}/search/movie?api_key=${tmdbKey}&query=${queryText}`)
  return response.data
}

export default { getPopular, getNowPlaying, getUpcoming, getDetails, getSimilarMovies, getSearch }
