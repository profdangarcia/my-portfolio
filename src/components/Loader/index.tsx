import React from 'react'

import { Container, Dot, Dots } from './styles'

const Loader: React.FC = () => {
  return (
    <Container>
      <Dot />
      <Dots>
        <span></span>
        <span></span>
        <span></span>
      </Dots>
    </Container>
  )
}

export default Loader
