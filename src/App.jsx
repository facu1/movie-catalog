import { Container } from '@chakra-ui/react'

import Home from './components/Home/Home'
import MovieGrid from './components/MovieGrid/MovieGrid'
import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'

import './App.css'
import Footer from './components/Footer/Footer'
import { Route, Routes } from 'react-router-dom'

const App = () => {

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
        <Route
          path='/most-popular'
          element={<MovieGrid label={'Most Popular Movies'} />} />
        <Route
          path='/now-playing'
          element={<MovieGrid label={'Now Playing Movies'} />} />
        <Route
          path='/upcoming'
          element={<MovieGrid label={'Upcoming Movies'} />} />
        <Route path='/search' element={<MovieGrid label={'Results'} />} />
        <Route path='/:id' element={<MovieDetail />} />
        <Route
          path='/:id/similar'
          element={<MovieGrid label={'Similar Movies'} />} />
      </Routes>
      <Footer />
    </Container>
  )
}

export default App
