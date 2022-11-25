import { Image, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { fakeData } from '../../../fake_data'

import './MovieGrid.css'

const movieGrid = ({ label, searchedWord }) => {
  const movies = fakeData.results

  return (
    <div className="movie-grid">
      <div className='movie-grid__label'>
        {label} {searchedWord ? `"${searchedWord}"` : ''}
      </div>
      <div className='movie-grid__grid'>
        {movies.map((movie) => (
          <LinkBox key={movie.id} className='movie-grid__movie'>
            <LinkOverlay href={`#${movie.id}`} />
            <Image
              className='movie-grid__image'
              src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
              loading='lazy' />
          </LinkBox>
        ))}
      </div>
    </div>
  )
}

export default movieGrid