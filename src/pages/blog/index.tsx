import React from 'react'
import Seo from '../../components/Seo'

interface PageProps {
  language: string
}

const Blog: React.FC<PageProps> = ({ language }) => {
  const seoTitle = 'Dan Garcia - Blog'
  const seoDescription = 'Tecnologia e Café... sempre bom ler um pouco.'

  return (
    <>
      <Seo title={seoTitle} description={seoDescription} />
    </>
  )
}

export default Blog
