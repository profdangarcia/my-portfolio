import React, { useMemo } from 'react'
import PortfolioCard from '../PortfolioCard'
import SectionTitle from '../utils/SectionTitle'
import Wrapper from '../utils/Wrapper'

import sectionData from './data'
import { Container, Content } from './styles'

const PortfolioSection: React.FC = () => {
  const { projects } = sectionData

  const cards = useMemo(
    () =>
      projects.map(project => (
        <PortfolioCard cardData={project} key={project.title} />
      )),
    [projects]
  )

  return (
    <Container>
      <Wrapper>
        <SectionTitle
          title={sectionData.title}
          description={sectionData.description}
        />
        <Content>{cards}</Content>
      </Wrapper>
    </Container>
  )
}

export default PortfolioSection
