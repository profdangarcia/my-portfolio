/* eslint-disable camelcase */
import React from 'react'
import styled from 'styled-components'

interface IframeProps {
  style: string
}

export const GTMIframe = styled.iframe<IframeProps>``

export const HeadGTM: React.FC = () => {
  const gtmScript = `<!-- Google Tag Manager -->
  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-TGCZZCC');
  <!-- End Google Tag Manager -->`

  return <script dangerouslySetInnerHTML={{ __html: gtmScript }} />
}

export const BodyGTM: React.FC = () => {
  return (
    <noscript>
      <GTMIframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-TGCZZCC"
        height="0"
        width="0"
        style="display:none;visibility:hidden"
      ></GTMIframe>
    </noscript>
  )
}
