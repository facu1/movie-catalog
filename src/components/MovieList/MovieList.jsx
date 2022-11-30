import { ArrowBackIcon, ArrowForwardIcon } from '@chakra-ui/icons'
import { HStack, Image, Link, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { useState } from 'react'
import { useRef } from 'react'

import { Link as RouterLink } from 'react-router-dom'

import './MovieList.css'

const MovieList = ({ movies, label, link }) => {
  const listRef = useRef()
  const [showBackBttn, setShowBackBttn] = useState(false)
  const [showForwardBttn, setShowForwardBttn] = useState(true)

  const moveRight = () => {
    const { scrollLeft, offsetWidth, scrollWidth  } = listRef.current
    listRef.current.scrollLeft += offsetWidth

    setShowBackBttn(true)

    if (scrollLeft + offsetWidth + 10 >= scrollWidth - offsetWidth) setShowForwardBttn(false)
  }

  const moveLeft = () => {
    const { scrollLeft, offsetWidth } = listRef.current
    listRef.current.scrollLeft -= offsetWidth

    setShowForwardBttn(true)

    if (scrollLeft - offsetWidth <= 0) setShowBackBttn(false)
  }

  return (
    <>
      <div className='movie-list__label'>
        {label} <Link as={RouterLink} className='movie-list__link' to={link}>More +</Link>
      </div>
      <div className='movie-list__list'>
        <button
          className={showBackBttn
            ? 'movie-list__button movie-list__button--is-show'
            : 'movie-list__button movie-list__button--is-no-show'}
          onClick={moveLeft}
        >
          <ArrowBackIcon boxSize={8} />
        </button>
        <HStack ref={listRef} className='movie-list__movies' spacing='unset'>
          {movies.map((movie) => (
            <LinkBox key={movie.id} className='movie-list__movie'>
              <LinkOverlay as={RouterLink} to={`/${movie.id}`} />
              <Image
                className='movie-list__image'
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                loading='lazy' />
            </LinkBox>
          ))}
        </HStack>
        <button
          className={showForwardBttn
            ? 'movie-list__button movie-list__button--is-show'
            : 'movie-list__button movie-list__button--is-no-show'}
          onClick={moveRight}
        >
          <ArrowForwardIcon boxSize={8} />
        </button>
      </div>
    </>
  )
}

export default MovieList