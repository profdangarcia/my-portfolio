import React from 'react'
import BlogGrid from '../../components/BlogGrid'
import Seo from '../../components/Seo'

import { CompletePost } from '../../types/post'
import pageData from '../../pageData/blog'
import { getAllPosts } from '../api/posts'

interface PageProps {
  language: string
  posts: CompletePost[]
}

const Blog: React.FC<PageProps> = ({ language, posts }) => {
  const data = pageData[language]

  return (
    <>
      <Seo data={data.seo} />
      <BlogGrid data={data.blog} posts={posts} />
    </>
  )
}

export async function getStaticProps() {
  const allPosts = await getAllPosts()

  return {
    props: {
      posts: allPosts
    }
  }
}

export default Blog
