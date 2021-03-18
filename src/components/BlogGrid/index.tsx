import React from 'react'
import PostItem from '../PostItem'
import Wrapper from '../utils/Wrapper'

import { Container, Title } from './styles'

interface Props {
  data: {
    title: string
  }
  posts: Array<{
    slug: string
    title: string
    image: string
    description: string
  }>
}

const BlogGrid: React.FC<Props> = ({ data, posts }) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Container>
        {posts.map(post => (
          <PostItem data={post} key={post.slug} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default BlogGrid
