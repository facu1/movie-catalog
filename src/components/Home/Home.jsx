import MovieList from '../MovieList/MovieList'
import Carousel from '../Carousel/Carousel'

import './Home.css'
import { useSelector } from 'react-redux'

const Home = () => {
  const { nowPlaying, upcoming } = useSelector(({ movies }) => movies)

  return (
    <div className='home'>
      <Carousel />
      <MovieList movies={nowPlaying} label='Now Playing' link='/now-playing' />
      <MovieList movies={upcoming} label='Upcoming' link='/upcoming' />
    </div>
  )
}

export default Home