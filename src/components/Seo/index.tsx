import React from 'react'
import Head from 'next/head'

interface SeoProps {
  data: {
    title: string
    description: string
    canonical?: string
    thumbnail?: string
  }
}

const Seo: React.FC<SeoProps> = ({
  data: { title, description, canonical = '', thumbnail }
}) => {
  const thumbnailImage =
    thumbnail || 'https://dangarcia-devel.vercel.app/dev.png'

  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
      />
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta
        name="google-site-verification"
        content="hyVDovsqxQpSLvMzLawu_CkTM5siBtxl1Y6RrNhxpY8"
      />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={`https://dangarcia-devel.vercel.app${canonical}`}
      />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={thumbnailImage} />
      <meta name="twitter:image" content={thumbnailImage} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:domain"
        content={`https://dangarcia-devel.vercel.app${canonical}`}
      />
      <link
        href={`https://dangarcia-devel.vercel.app${canonical}`}
        rel="canonical"
        data-cy="canonical-link"
      />
      <title>{`${title} | Dan Garcia`}</title>
    </Head>
  )
}

export default Seo
