import React, { Dispatch, SetStateAction } from 'react'

import { Container, Content, Button, Flag } from './styles'

type ComponentProps = {
  changeLanguage: Dispatch<SetStateAction<string>>
  currentLanguage: string
  currentPage: string
}

const LanguageHandler: React.FC<ComponentProps> = ({
  changeLanguage,
  currentLanguage,
  currentPage
}) => {
  return (
    <Container isHome={currentPage === '/'}>
      <Content>
        <Button onClick={() => changeLanguage('en')}>
          <Flag
            src="./us.svg"
            alt="English"
            active={currentLanguage === 'en'}
          />
        </Button>
        <Button onClick={() => changeLanguage('pt')}>
          <Flag
            src="./br.svg"
            alt="Português BR"
            active={currentLanguage === 'pt'}
          />
        </Button>
      </Content>
    </Container>
  )
}

export default LanguageHandler
