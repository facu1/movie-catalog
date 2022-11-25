import { Container } from '@chakra-ui/react'

import Home from './components/Home/Home'
// import MovieGrid from './components/MovieGrid/MovieGrid'
// import MovieDetail from './components/MovieDetail/MovieDetail'
import Header from './components/Header/Header'

import './App.css'
import Footer from './components/Footer/Footer'

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
      <Home />
      {/* <MovieGrid label={'Most Popular Movies'} /> */}
      {/* <MovieGrid label={'Now Playing Movies'} /> */}
      {/* <MovieGrid label={'Upcoming Movies'} /> */}
      {/* <MovieGrid label={'Results for'} searchedWord={'word'} /> */}
      {/* <MovieDetail /> */}
      <Footer />
    </Container>
  )
}

export default App
