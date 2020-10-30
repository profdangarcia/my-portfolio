import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'

import { Container } from '../styles/pages/home/styles'
import Seo from '../components/Seo'

const Home: React.FC = () => {
  const seoTitle = 'Aceita um café?'
  const seoDescription =
    'Um desenvolvedor frontend que ama a tecnologia e novos desafios!'
  return (
    <Container>
      <Seo title={seoTitle} description={seoDescription} />
      <Header />
      <Banner />
      <About />
    </Container>
  )
}

export default Home
