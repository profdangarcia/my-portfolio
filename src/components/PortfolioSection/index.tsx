import React from 'react'
import PortfolioCard from '../PortfolioCard'
import Wrapper from '../utils/Wrapper'

import { Container, Content } from './styles'

const PortfolioSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
          <PortfolioCard />
        </Content>
      </Wrapper>
    </Container>
  )
}

export default PortfolioSection
