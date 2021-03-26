import { useRouter } from 'next/dist/client/router'
import React, { Dispatch, SetStateAction } from 'react'

import { Container, Content, Button, Flag } from './styles'

type ComponentProps = {
  changeLanguage: Dispatch<SetStateAction<string>>
  currentLanguage: string
}

const LanguageHandler: React.FC<ComponentProps> = ({
  changeLanguage,
  currentLanguage
}) => {
  const { pathname } = useRouter()
  return (
    <Container isHome={pathname === '/'}>
      <Content>
        <Button onClick={() => changeLanguage('en')}>
          <Flag src="/us.svg" alt="English" active={currentLanguage === 'en'} />
        </Button>
        <Button onClick={() => changeLanguage('pt')}>
          <Flag
            src="/br.svg"
            alt="Português BR"
            active={currentLanguage === 'pt'}
          />
        </Button>
      </Content>
    </Container>
  )
}

export default LanguageHandler
