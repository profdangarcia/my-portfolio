import React from 'react'
import { getPostBySlug, getAllPosts } from '../api/posts'
import { GetStaticPropsContext } from 'next'
import Seo from '../../components/Seo'
import BlogPost from '../../components/BlogPost'
import { CompletePost } from '../../types/post'

export default function Post(props: CompletePost) {
  return (
    <>
      <Seo
        data={{
          ...props,
          canonical: `/blog/${props.slug}`,
          thumbnail: props.image
        }}
      />
      <BlogPost data={props} />
    </>
  )
}

export async function getStaticProps(context: GetStaticPropsContext) {
  return {
    props: await getPostBySlug(context.params.postSlug)
  }
}

export async function getStaticPaths() {
  const posts = await getAllPosts()
  const paths = posts.map(post => {
    return {
      params: { postSlug: post.slug }
    }
  })

  return {
    paths: paths,
    fallback: false
  }
}
