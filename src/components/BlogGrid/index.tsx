import React from 'react'
import ShimmerBlogCard from '../shimmer/ShimmerBlogCard'
import Wrapper from '../utils/Wrapper'

import { Container, Title } from './styles'

const BlogGrid: React.FC = () => {
  return (
    <Wrapper>
      <Title>EM BREVE...</Title>
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
