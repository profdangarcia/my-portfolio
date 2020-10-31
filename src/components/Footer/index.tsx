import React from 'react'
import SocialLinks from '../utils/SocialLinks'

import { Container, CopyrightText } from './styles'

const Footer: React.FC = () => {
  return (
    <Container id="footer">
      <SocialLinks isBanner={false} />
      <CopyrightText>Criado com ❤️ por Dan Garcia</CopyrightText>
    </Container>
  )
}

export default Footer
