import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'

import { Container } from '../styles/pages/home/styles'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Dan Garcia - Fullstack Developer</title>
      </Head>
      <Header />
      <Banner />
      <About />
    </Container>
  )
}

export default Home
