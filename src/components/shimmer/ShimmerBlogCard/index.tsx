import React from 'react'

import { CardBody, Container, ImageBox, TextBlock } from './styles'

const ShimmerBlogCard: React.FC = () => {
  return (
    <Container>
      <ImageBox className="shimmer" />
      <CardBody>
        <TextBlock className="shimmer" isTitle />
        <TextBlock className="shimmer" />
        <TextBlock className="shimmer" />
        <TextBlock className="shimmer" />
        <TextBlock className="shimmer" />
      </CardBody>
    </Container>
  )
}

export default ShimmerBlogCard
