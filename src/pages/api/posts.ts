import matter from 'gray-matter'
import marked from 'marked'
import { CompletePost } from '../../types/post'

export async function getAllPosts(): Promise<CompletePost[]> {
  const context = require.context('../../posts', false, /\.md$/)
  const posts = []

  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../../posts/${post}`)
    const meta = matter(content.default)

    posts.push({
      id: meta.data.id,
      slug: post.replace('.md', ''),
      title: meta.data.title,
      image: meta.data.image,
      author: meta.data.author,
      date: meta.data.date,
      description: meta.data.description
    })
  }

  return posts.sort((a, b) => b.id - a.id)
}

export async function getPostBySlug(slug: string | string[]) {
  const fileContent = await import(`../../posts/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked(meta.content)

  return {
    id: meta.data.id,
    title: meta.data.title,
    description: meta.data.description,
    image: meta.data.image,
    author: meta.data.author,
    date: meta.data.date,
    slug,
    content
  }
}
