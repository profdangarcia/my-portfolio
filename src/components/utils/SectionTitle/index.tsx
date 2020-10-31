import React from 'react'

import { Container, Title, Description } from './styles'

interface SectionProps {
  title: string
  description?: string
}

const SectionTitle: React.FC<SectionProps> = ({ title, description }) => {
  return (
    <Container>
      <Title>{title}</Title>
      {description && <Description>{description}</Description>}
    </Container>
  )
}

export default SectionTitle
