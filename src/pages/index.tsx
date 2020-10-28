import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'

import { Container } from '../styles/pages/home/styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Header />
      <Banner />
    </Container>
  )
}

export default Home
