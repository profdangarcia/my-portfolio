import React from 'react'

import Banner from '../components/Banner'
import About from '../components/About'
import Seo from '../components/Seo'
import TechSection from '../components/TechSection'
import PortfolioSection from '../components/PortfolioSection'
import Contact from '../components/Contact'
import CoffeeLoading from '../components/CoffeeLoading'

import pageData from '../pageData/home'

interface PageProps {
  language: string
}

const Home: React.FC<PageProps> = ({ language }) => {
  const data = pageData[language]

  return (
    <>
      <Seo data={data.seo} />
      <CoffeeLoading />
      <Banner data={data.banner} />
      <About data={data.about} />
      <TechSection data={data.techs} />
      <PortfolioSection data={data.portfolio} />
      <Contact data={data.contact} />
    </>
  )
}

export default Home
