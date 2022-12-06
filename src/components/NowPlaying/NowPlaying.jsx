import { Skeleton } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import MovieGrid from '../MovieGrid/MovieGrid'

import './NowPlaying.css'

const NowPlaying = () => {
  const movies = useSelector(({ movies }) => movies.nowPlaying)

  return (
    <div className='now-playing'>
      <Skeleton isLoaded={movies.length}>
        <div className='now-playing__title'>Now Playing Movies</div>
      </Skeleton>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default NowPlaying
