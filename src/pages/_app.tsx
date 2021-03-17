import React, { useState } from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import LanguageHandler from '../components/LanguageHandler'
import { useRouter } from 'next/dist/client/router'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('en')
  const { pathname } = useRouter()

  return (
    <ThemeProvider theme={theme}>
      <LanguageHandler
        changeLanguage={setLanguage}
        currentLanguage={language}
        currentPage={pathname}
      />
      <Component {...pageProps} language={language} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
