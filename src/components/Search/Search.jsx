import { Skeleton } from '@chakra-ui/react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import MovieGrid from '../MovieGrid/MovieGrid'

import './Search.css'

const Search = () => {
  const navigate = useNavigate()
  const movies = useSelector(({ movies }) => movies.searchResults)
  const searchWord = useSelector(({ movies }) => movies.searchWord)

  useEffect(() => {
    if (!searchWord) navigate('/')
  }, [])

  return (
    <div className='search'>
      <Skeleton isLoaded={movies.length}>
        <div className='search__title'>Search Results for {`'${searchWord}'`}</div>
      </Skeleton>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default Search