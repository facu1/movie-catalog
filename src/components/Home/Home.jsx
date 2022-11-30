import { fakeData } from '../../../fake_data'

import MovieList from '../MovieList/MovieList'
import Carousel from '../Carousel/Carousel'

import './Home.css'

const Home = () => {
  const movies = fakeData.results.slice(0, 12)

  return (
    <div className='home'>
      <Carousel />
      <MovieList movies={movies} label='Now Playing' link='/now-playing' />
      <MovieList movies={movies} label='Upcoming' link='/upcoming' />
    </div>
  )
}

export default Home