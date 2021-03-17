import React from 'react'
import ShimmerBlogCard from '../shimmer/ShimmerBlogCard'
import Wrapper from '../utils/Wrapper'

import { Container, Title } from './styles'

interface Props {
  data: {
    title: string
  }
}

const BlogGrid: React.FC<Props> = ({ data }) => {
  return (
    <Wrapper>
      <Title>{data.title}</Title>
      <Container>
        <ShimmerBlogCard />
        <ShimmerBlogCard />
        <ShimmerBlogCard />
        <ShimmerBlogCard />
        <ShimmerBlogCard />
        <ShimmerBlogCard />
      </Container>
    </Wrapper>
  )
}

export default BlogGrid
