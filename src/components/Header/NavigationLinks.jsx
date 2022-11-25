import { Link, Stack } from '@chakra-ui/react'

const NavigationLinks = ({ className = '', itemClassName = '', isHorizontal }) => (
  <Stack className={className} direction={isHorizontal ? 'row' : 'column'}>
    <Link className={itemClassName}>Popular</Link>
    <Link className={itemClassName}>Now Playing</Link>
    <Link className={itemClassName}>Upcoming</Link>
  </Stack>
)

export default NavigationLinks