import React, { useState } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/dist/client/router'
import { ThemeProvider } from 'styled-components'

import theme from '../styles/theme'
import LanguageHandler from '../components/LanguageHandler'
import Header from '../components/Header'
import Footer from '../components/Footer'
import generalData from '../pageData/general'
import GlobalStyle from '../styles/global'
import CoffeeLoading from '../components/CoffeeLoading'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('en')
  const { pathname } = useRouter()
  const data = generalData[language]

  return (
    <ThemeProvider theme={theme}>
      <CoffeeLoading />
      <LanguageHandler
        changeLanguage={setLanguage}
        currentLanguage={language}
      />
      <Header data={data.header} isHome={pathname === '/'} />
      <Component {...pageProps} language={language} />
      <Footer data={data.footer} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
