import React, { useState } from 'react'
import { AppProps } from 'next/app'

import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import LanguageHandler from '../components/LanguageHandler'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('en')
  return (
    <ThemeProvider theme={theme}>
      <LanguageHandler
        changeLanguage={setLanguage}
        currentLanguage={language}
      />
      <Component {...pageProps} language={language} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
