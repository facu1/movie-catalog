import { MinusIcon, StarIcon } from '@chakra-ui/icons'
import { Image, Skeleton } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useMatch } from 'react-router-dom'
import { getMovieDetails } from '../../reducers/moviesReducer'
import MovieList from '../MovieList/MovieList'

import './MovieDetail.css'

const MovieDetail = () => {
  const movie = useSelector(({ movies }) => movies.movieDetails)
  const isLoading = useSelector(({ movies }) => movies.isLoading)

  const dispatch = useDispatch()

  const match = useMatch('/:id')

  useEffect(() => {
    dispatch(getMovieDetails(match.params.id))
  }, [match])

  if (!movie || isLoading) {
    return (
      <div className='movie-detail'>
        <Skeleton isLoaded={movie}>
          <div className='movie-detail__movie'>
            <div className='movie-detail__back'>
              <div style={{ width: '100%', height: '100%', aspectRatio: '99 / 40' }} />
              <div className='movie-detail__background' />
            </div>
          </div>
        </Skeleton>
        <MovieList movies={[]} label='Similar Movies' />
      </div>
    )
  }

  const toHoursAndMinutes = (totalMinutes) => {
    const hours = Math.floor(totalMinutes / 60)
    const minutes = totalMinutes % 60
    return `${hours}h ${minutes}m`
  }

  const {
    title,
    backdrop_path,
    poster_path,
    vote_average,
    vote_count,
    release_date,
    overview,
    runtime,
    tagline,
    genres,
    similarMovies
  } = movie

  const genresList = genres.map((genre) => genre.name).join(', ')

  const info = (className) => {
    return (
      <div className={className}>
        <div className='movie-detail__date-runtime'>
          <div>{release_date.slice(0, 4)}</div>
          <MinusIcon />
          <div>{toHoursAndMinutes(runtime)}</div>
        </div>
        <div className='movie-detail__rating'>
          <StarIcon color='yellow' />
          <div>{vote_average.toFixed(2)} from {vote_count} votes</div>
        </div>
        <div className='movie-detail__section'>
          <div className='movie-detail__label'>Overview</div>
          <div className='movie-detail__text'>{overview}</div>
        </div>
        <div className='movie-detail__section'>
          <div className='movie-detail__label'>Genres</div>
          <div className='movie-detail__text'>{genresList}</div>
        </div>
      </div>
    )
  }

  return (
    <div className='movie-detail'>
      <div className='movie-detail__movie'>
        <div className='movie-detail__back'>
          <Image src={`https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`} />
          <div className='movie-detail__background' />
        </div>
        <div className='movie-detail__info'>
          <Image className='movie-detail__image' src={`https://image.tmdb.org/t/p/w300${poster_path}`} />
          <div>
            <div className='movie-detail__title'>{title}</div>
            <div className='movie-detail__subtitle'>{tagline}</div>
            {info('movie-detail__details movie-detail__details--desktop')}
          </div>
        </div>
      </div>
      {info('movie-detail__details')}
      <MovieList movies={similarMovies} label='Similar Movies' />
    </div>
  )
}

export default MovieDetail