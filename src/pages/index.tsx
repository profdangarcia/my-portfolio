import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'

import { Container } from '../styles/pages/home/styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
      <About />
    </Container>
  )
}

export default Home
