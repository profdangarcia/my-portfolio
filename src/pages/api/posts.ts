import matter from 'gray-matter'
import marked from 'marked'

interface Posts {
  slug: string
  title: string
  image: string
  description: string
  content?: string
}

export async function getAllPosts(): Promise<Posts[]> {
  const context = require.context('../../posts', false, /\.md$/)
  const posts = []

  for (const key of context.keys()) {
    const post = key.slice(2)
    const content = await import(`../../posts/${post}`)
    const meta = matter(content.default)

    posts.push({
      slug: post.replace('.md', ''),
      title: meta.data.title,
      image: meta.data.image,
      description: meta.data.description
    })
  }

  return posts
}

export async function getPostBySlug(slug: string | string[]) {
  const fileContent = await import(`../../posts/${slug}.md`)

  const meta = matter(fileContent.default)
  const content = marked(meta.content)

  return {
    title: meta.data.title,
    description: meta.data.description,
    image: meta.data.image,
    slug,
    content
  }
}
