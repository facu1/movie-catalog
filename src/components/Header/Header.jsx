import { Box, Image, LinkBox, LinkOverlay } from '@chakra-ui/react'

import { Link as RouterLink } from 'react-router-dom'

import CustomDrawer from './CustomDrawer'
import NavigationLinks from './NavigationLinks'
import SearchBar from './SearchBar'
import SearchModal from './SearchModal'
import logo from '../../assets/MClogo.png'

import './Header.css'

const Header = () => (
  <Box background='background.900' className='header'>
    <CustomDrawer />
    <LinkBox>
      <LinkOverlay as={RouterLink} to='/' />
      <Image className='header__logo' src={logo} alt="movie catalog logo" />
    </LinkBox>
    <NavigationLinks className='header__links-list' isHorizontal />
    <SearchModal />
    <SearchBar className='header__search-bar' width='30%' />
  </Box>
)

export default Header