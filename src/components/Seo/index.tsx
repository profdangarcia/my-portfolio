import React from 'react'
import Head from 'next/head'

interface SeoProps {
  title: string
  description: string
  canonical?: string
}

const Seo: React.FC<SeoProps> = ({ title, description, canonical = '' }) => {
  return (
    <Head>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta name="google-site-verification" content="hyVDovsqxQpSLvMzLawu_CkTM5siBtxl1Y6RrNhxpY8" />
      <meta property="og:type" content="website" />
      <meta name="google-site-verification" content="hyVDovsqxQpSLvMzLawu_CkTM5siBtxl1Y6RrNhxpY8" />
      <meta
        property="og:url"
        content={`https://dangarcia-devel.vercel.app${canonical}`}
      />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content="https://dangarcia-devel.vercel.app/dev.png"
      />
      <meta
        name="twitter:image"
        content="https://dangarcia-devel.vercel.app/dev.png"
      />
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
      <title>{`${title} | Dan Dev`}</title>
    </Head>
  )
}

export default Seo
