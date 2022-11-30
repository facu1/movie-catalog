import { Link, Stack } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

const NavigationLinks = ({ className = '', itemClassName = '', isHorizontal }) => (
  <Stack className={className} direction={isHorizontal ? 'row' : 'column'}>
    <Link as={RouterLink} to='/most-popular' className={itemClassName}>Popular</Link>
    <Link as={RouterLink} to='/now-playing' className={itemClassName}>Now Playing</Link>
    <Link as={RouterLink} to='/upcoming' className={itemClassName}>Upcoming</Link>
  </Stack>
)

export default NavigationLinks