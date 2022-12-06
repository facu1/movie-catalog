import { SearchIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getMovieSearch } from '../../reducers/moviesReducer'

const SearchBar = ({ className = '', width = '100%' }) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [input, setInput] = useState('')

  const search = (e) => {
    if (e.key === 'Enter' && input.length > 2) {
      dispatch(getMovieSearch(input))
      navigate('/search')
    }
  }

  return (
    <HStack className={className} width={width}>
      <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search a movie' onKeyDown={search} />
      <IconButton
        disabled={input.length < 3}
        onClick={search}
        icon={<SearchIcon />}
        backgroundColor='background.900'
        _focus={{ backgroundColor: 'background.900' }}
        _hover={{ backgroundColor: 'background.900' }} />
    </HStack>
  )
}

export default SearchBar