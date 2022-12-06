import { createSlice } from '@reduxjs/toolkit'

import moviesService from '../services/movies'

const initialState = {
  popular: [],
  nowPlaying: [],
  upcoming: [],
  movieDetails: null,
  searchResults: [],
  isLoading: false
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action) {
      const { popular, nowPlaying, upcoming } = action.payload
      return { ...state, popular, nowPlaying, upcoming }
    },
    setMovieDetails(state, action) {
      return { ...state, movieDetails: action.payload }
    },
    setSearchResults(state, action) {
      return { ...state, searchResults: action.payload }
    },
    setLoading(state, action) {
      return { ...state, isLoading: action.payload }
    }
  }
})

export const { setMovies, setMovieDetails, setLoading, setSearchResults } = moviesSlice.actions

export const initializeMovies = () => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const [popular, nowPlaying, upcoming] = await Promise
      .all([
        moviesService.getPopular(),
        moviesService.getNowPlaying(),
        moviesService.getUpcoming()
      ])

    dispatch(setMovies({
      popular: popular.results,
      nowPlaying: nowPlaying.results,
      upcoming: upcoming.results
    }))
    dispatch(setLoading(false))
  }
}

export const getMovieDetails = (movieId) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const movieDetails = await moviesService.getDetails(movieId)
    const { results } = await moviesService.getSimilarMovies(movieId)
    movieDetails.similarMovies = results.slice(0, 12)
    dispatch(setMovieDetails(movieDetails))
    dispatch(setLoading(false))
  }
}

export const getMovieSearch = (queryText) => {
  return async (dispatch) => {
    dispatch(setLoading(true))
    const { results } = await moviesService.getSearch(queryText)
    dispatch(setSearchResults(results))
    dispatch(setLoading(false))
  }
}

export default moviesSlice.reducer
