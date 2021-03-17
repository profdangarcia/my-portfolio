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

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const [language, setLanguage] = useState('en')
  const { pathname } = useRouter()
  console.log(pathname)
  const data = generalData[language]

  return (
    <ThemeProvider theme={theme}>
      <LanguageHandler
        changeLanguage={setLanguage}
        currentLanguage={language}
        currentPage={pathname}
      />
      <Header data={data.header} isHome={pathname === '/'} />
      <Component {...pageProps} language={language} />
      <Footer data={data.footer} />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
