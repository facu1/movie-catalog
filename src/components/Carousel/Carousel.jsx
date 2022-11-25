import { Image } from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { fakeData } from '../../../fake_data'

import './Carousel.css'

const images = fakeData.results.map(({ backdrop_path, title }) => ({
  img_url: `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`,
  title
})).slice(0, 5)

const Carousel = () => {
  const [selected, setSelected] = useState(0  )

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

  const next = () => setSelected((selected) => selected + 1 === images.length ? 0 : selected + 1)

  const nextImg = () => setImg(next)

  const toIndex = (index) => () => setSelected(index)

  const descriptions = images.map(({ title }) => (
    <div className='descriptions' style={{ opacity: visible ? 1 : 0 }} key={title}>{title}</div>
  ))

  const imgSelector = () => {
    return (
      <div className='img-selector'>
        {images.map(({ title }, index) => (
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
      <Image
        className='carousel__img'
        style={{ opacity: visible ? 1 : 0 }}
        src={images[selected].img_url}
        onLoad={() => setVisible(true)}
      />
      {descriptions[selected]}
      {imgSelector()}
    </div>
  )
}

export default Carousel