import React from 'react'
import Wrapper from '../utils/Wrapper'

import { Container, PostBody, PostTitle, PostImage } from './styles'

interface Props {
  data: {
    title: string
    image: string
    content: string
  }
}

const BlogPost: React.FC<Props> = ({ data: { title, image, content } }) => {
  return (
    <Container>
      <Wrapper>
        <PostBody>
          <PostTitle>{title}</PostTitle>
          <PostImage src={image} alt={title} />
          <div
            dangerouslySetInnerHTML={{ __html: content }}
            id="post-content"
          />
        </PostBody>
      </Wrapper>
    </Container>
  )
}

export default BlogPost
