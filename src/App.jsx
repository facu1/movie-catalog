import { Container } from '@chakra-ui/react'
import { Route, Routes } from 'react-router-dom'

import Home from './components/Home/Home'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { initializeMovies } from './reducers/moviesReducer'
import Popular from './components/Popular/Popular'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Upcoming from './components/Upcoming/Upcoming'
import Search from './components/Search/Search'
import './App.css'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(initializeMovies())
  }, [dispatch])

  return (
    <Container
      maxW='1328px'
      paddingX='0px'
      minH='100vh'
      display='flex'
      flexDir='column'
    >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/most-popular' element={<Popular />} />
        <Route path='/now-playing' element={<NowPlaying />} />
        <Route path='/upcoming' element={<Upcoming />} />
        <Route path='/search' element={<Search />} />
        <Route path='/:id' element={<MovieDetail />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
