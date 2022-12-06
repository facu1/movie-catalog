import { Image, LinkBox, LinkOverlay, Skeleton } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Link as RouterLink } from 'react-router-dom'

import './Carousel.css'

const Carousel = () => {
  const movies = useSelector(({ movies }) => {
    const { popular } = movies
    if (!popular.length) return []

    return popular.slice(0, 5).map(({ id, backdrop_path, title }) => ({
      id,
      img_url: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`,
      title
    }))
  })

  const [selected, setSelected] = useState(0)

  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      nextImg()
    }, 4500)
    return () => {
      clearInterval(interval)
    }
  }, [])

  const setImg = (setter) => {
    setVisible(false)
    setTimeout(() => {
      setter()
    }, 500)
  }

  const next = () => setSelected((selected) => selected ===  4 ? 0 : selected + 1)

  const nextImg = () => setImg(next)

  const toIndex = (index) => () => setSelected(index)

  if (!movies.length) {
    return <div className='carousel'>
      <Skeleton className='carousel__img' />
    </div>
  }

  const descriptions = movies.map(({ title }) => (
    <div className='descriptions' style={{ opacity: visible ? 1 : 0 }} key={title}>{title}</div>
  ))

  const imgSelector = () => {
    return (
      <div className='img-selector'>
        {movies.map(({ title }, index) => (
          <div
            key={title}
            className={index === selected
              ? 'img-selector__selector img-selector__selector--selected'
              : 'img-selector__selector'
            }
            onClick={() => index !== selected && setImg(toIndex(index))} />
        ))}
      </div>
    )
  }

  return (
    <div className='carousel'>
      <LinkBox>
        <LinkOverlay as={RouterLink} to={`/${movies[selected].id}`} />
        <Image
          className='carousel__img'
          style={{ opacity: visible ? 1 : 0 }}
          src={movies[selected].img_url}
          onLoad={() => setVisible(true)}
        />
      </LinkBox>
      {descriptions[selected]}
      {imgSelector()}
    </div>
  )
}

export default Carousel