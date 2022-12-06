import { Skeleton } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import MovieGrid from '../MovieGrid/MovieGrid'

import './Upcoming.css'

const Upcoming = () => {
  const movies = useSelector(({ movies }) => movies.upcoming)

  return (
    <div className='upcoming'>
      <Skeleton isLoaded={movies.length}>
        <div className='upcoming__title'>Upcoming Movies</div>
      </Skeleton>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Upcoming
