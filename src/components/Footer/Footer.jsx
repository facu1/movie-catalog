import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Image, Link } from '@chakra-ui/react'
import logo from '../../assets/MClogo.png'

import './Footer.css'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-links">
        <Link href='https://www.themoviedb.org/documentation/api' isExternal>
          API used <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='https://github.com/facu1/movie-catalog' isExternal>
          GitHub <ExternalLinkIcon mx='2px' />
        </Link>
        <Link href='https://www.linkedin.com/in/facu-gonzalez/' isExternal>
          LinkedIn <ExternalLinkIcon mx='2px' />
        </Link>
      </div>
      <Image src={logo} w='200px' />
    </div>
  )
}

export default Footer