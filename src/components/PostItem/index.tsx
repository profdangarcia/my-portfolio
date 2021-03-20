import React from 'react'
import Link from 'next/link'

import { CompletePost } from '../../types/post'

import {
  Container,
  PostImage,
  PostData,
  PostTitle,
  PostDescription,
  PostAuthor
} from './styles'

interface Props {
  data: CompletePost
}

const PostItem: React.FC<Props> = ({ data }) => {
  return (
    <Link href={`/blog/${data.slug}`}>
      <a>
        <Container>
          <PostImage src={data.image} alt={data.title} />
          <PostData>
            <PostTitle>{data.title}</PostTitle>
            <PostDescription>{data.description}</PostDescription>
            <PostAuthor>
              {data.author} - {data.date}
            </PostAuthor>
          </PostData>
        </Container>
      </a>
    </Link>
  )
}

export default PostItem
