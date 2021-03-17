import React from 'react'
import Seo from '../../components/Seo'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import pageData from '../../pageData/home'

interface PageProps {
  language: string
}

const Blog: React.FC<PageProps> = ({ language }) => {
  const seoTitle = 'Dan Garcia - Blog'
  const seoDescription = 'Tecnologia e Café... sempre bom ler um pouco.'

  const data = pageData[language]

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
      <Header data={data.header} isHome={false} />
      <Footer data={data.footer} />
    </>
  )
}

export default Blog
