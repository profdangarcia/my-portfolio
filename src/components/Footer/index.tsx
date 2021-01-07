import React from 'react'
import SocialLinks from '../utils/SocialLinks'

import { Container, CopyrightText } from './styles'

type Props = {
  data: {
    message: string
  }
}

const Footer: React.FC<Props> = ({ data }) => {
  return (
    <Container id="footer">
      <SocialLinks isBanner={false} />
      <CopyrightText>{data.message}</CopyrightText>
    </Container>
  )
}

export default Footer
