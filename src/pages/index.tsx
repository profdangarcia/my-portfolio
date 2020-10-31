import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Seo from '../components/Seo'
import TechSection from '../components/TechSection'
import PortfolioSection from '../components/PortfolioSection'
import Footer from '../components/Footer'

const Home: React.FC = () => {
  const seoTitle = 'Aceita um café?'
  const seoDescription =
    'Um desenvolvedor frontend que ama a tecnologia e novos desafios!'
  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <Header />
      <Banner />
      <About />
      <TechSection />
      <PortfolioSection />
      <Footer />
    </>
  )
}

export default Home
