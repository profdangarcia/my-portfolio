import React from 'react'
import { CompletePost } from '../../types/post'

import Wrapper from '../utils/Wrapper'

import { Container, PostBody, PostTitle, PostAuthor, PostImage } from './styles'

interface Props {
  data: CompletePost
}

const BlogPost: React.FC<Props> = ({
  data: { title, image, content, author, date }
}) => {
  return (
    <Container>
      <Wrapper>
        <PostBody>
          <PostTitle>{title}</PostTitle>
          <PostAuthor>
            {author} - {date}
          </PostAuthor>
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
