import React from 'react'
import Link from 'next/link'

import {
  Container,
  PostImage,
  PostData,
  PostTitle,
  PostDescription,
  PostAuthor
} from './styles'

interface Props {
  data: {
    title: string
    slug: string
    image: string
    description: string
  }
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
            <PostAuthor>Daniel Garcia - 22 Fev. 2021</PostAuthor>
          </PostData>
        </Container>
      </a>
    </Link>
  )
}

export default PostItem
