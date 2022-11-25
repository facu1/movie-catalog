import { SearchIcon } from '@chakra-ui/icons'
import { HStack, IconButton, Input } from '@chakra-ui/react'

const SearchBar = ({ className = '', width = '100%' }) => (
  <HStack className={className} width={width}>
    <Input placeholder='Search a movie' />
    <IconButton
      icon={<SearchIcon />}
      backgroundColor='background.900'
      _focus={{ backgroundColor: 'background.900' }}
      _hover={{ backgroundColor: 'background.900' }} />
  </HStack>
)

export default SearchBar