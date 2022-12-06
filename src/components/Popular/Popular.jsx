import { Skeleton } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import MovieGrid from '../MovieGrid/MovieGrid'

import './Popular.css'

const Popular = () => {
  const movies = useSelector(({ movies }) => movies.popular)

  return (
    <div className='popular'>
      <Skeleton isLoaded={movies.length}>
        <div className='popular__title'>Most Popular Movies</div>
      </Skeleton>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Popular
