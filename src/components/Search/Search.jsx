import { Skeleton } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
import MovieGrid from '../MovieGrid/MovieGrid'

import './Search.css'

const Search = () => {
  const movies = useSelector(({ movies }) => movies.searchResults)

  return (
    <div className='search'>
      <Skeleton isLoaded={movies.length}>
        <div className='search__title'>Search Results</div>
      </Skeleton>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Search