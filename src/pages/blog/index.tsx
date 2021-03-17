import React from 'react'
import BlogGrid from '../../components/BlogGrid'
import Seo from '../../components/Seo'

import pageData from '../../pageData/blog'

interface PageProps {
  language: string
}

const Blog: React.FC<PageProps> = ({ language }) => {
  const data = pageData[language]

  return (
    <>
      <Seo data={data.seo} />
      <BlogGrid />
    </>
  )
}

export default Blog
