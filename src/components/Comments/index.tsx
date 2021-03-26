import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export const Comments = (): JSX.Element => {
  const { asPath } = useRouter()
  const comments = <div id="inject-comments-for-uterances" />

  useEffect(() => {
    const scriptElem = document.createElement('script')
    const anchor = document.getElementById('inject-comments-for-uterances')
    anchor.innerHTML = ''
    scriptElem.src = 'https://utteranc.es/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'
    scriptElem.setAttribute('repo', 'profdangarcia/my-portfolio')
    scriptElem.setAttribute('issue-term', 'pathname')
    scriptElem.setAttribute('label', 'blog-comment')
    scriptElem.setAttribute('theme', 'github-light')
    anchor.appendChild(scriptElem)
  }, [asPath])

  return comments
}
