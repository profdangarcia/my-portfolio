import React from 'react'

import { CompletePost } from '../../types/post'
import PostItem from '../PostItem'
import Wrapper from '../utils/Wrapper'

import { Container, Title, Description } from './styles'

interface Props {
  data: {
    title: string
    description: string
  }
  posts: CompletePost[]
}

const BlogGrid: React.FC<Props> = ({ data, posts }) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Description>{data.description}</Description>
      <Container>
        {posts.map(post => (
          <PostItem data={post} key={post.slug} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default BlogGrid
