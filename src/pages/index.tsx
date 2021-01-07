import React from 'react'

import Header from '../components/Header'
import Banner from '../components/Banner'
import About from '../components/About'
import Seo from '../components/Seo'
import TechSection from '../components/TechSection'
import PortfolioSection from '../components/PortfolioSection'
import Footer from '../components/Footer'
import Contact from '../components/Contact'
import CoffeeLoading from '../components/CoffeeLoading'

import pageData from '../pageData/home'

interface PageProps {
  language: string
}

const Home: React.FC<PageProps> = ({ language }) => {
  const seoTitle = 'Aceita um café?'
  const seoDescription =
    'Um desenvolvedor frontend que ama a tecnologia e novos desafios!'

  const data = pageData[language]

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <CoffeeLoading />
      <Header data={data.header} />
      <Banner data={data.banner} />
      <About data={data.about} />
      <TechSection data={data.techs} />
      <PortfolioSection data={data.portfolio} />
      <Contact data={data.contact} />
      <Footer />
    </>
  )
}

export default Home
