import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

import './MovieGrid.css'

const MovieGrid = ({ movies }) => (
  <div className='movie-grid'>
    {movies.map((movie) => (
      <LinkBox key={movie.id} className='movie-grid__movie'>
        <LinkOverlay as={RouterLink} to={`/${movie.id}`} />
        <Image
          className='movie-grid__image'
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          loading='lazy'
          fallbackSrc='https://via.placeholder.com/200x300' />
      </LinkBox>
    ))}
  </div>
)

export default MovieGrid