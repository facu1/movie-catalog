import { SearchIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'

import { useNavigate } from 'react-router-dom'

const SearchBar = ({ className = '', width = '100%' }) => {
  const navigate = useNavigate()

  const search = () => {
    navigate('/search')
  }

  return (
    <HStack className={className} width={width}>
      <Input placeholder='Search a movie' />
      <IconButton
        onClick={search}
        icon={<SearchIcon />}
        backgroundColor='background.900'
        _focus={{ backgroundColor: 'background.900' }}
        _hover={{ backgroundColor: 'background.900' }} />
    </HStack>
  )
}

export default SearchBar