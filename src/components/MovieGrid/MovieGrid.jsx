import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react'

import './MovieGrid.css'

const MovieGrid = ({ movies }) => (
  <div className='movie-grid'>
    {movies.map((movie) => (
      <LinkBox key={movie.id} className='movie-grid__movie'>
        <LinkOverlay href={`/${movie.id}`} />
        <Image
          className='movie-grid__image'
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          loading='lazy' />
      </LinkBox>
    ))}
  </div>
)

export default MovieGrid