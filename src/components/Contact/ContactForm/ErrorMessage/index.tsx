import React from 'react'

import { Container, Message } from './styles'

interface ComponentProps {
  message: string
  appear: boolean
}

const ErrorMessage: React.FC<ComponentProps> = ({ message, appear }) => {
  return (
    <Container>
      <Message appear={appear}>{message}</Message>
    </Container>
  )
}

export default ErrorMessage
