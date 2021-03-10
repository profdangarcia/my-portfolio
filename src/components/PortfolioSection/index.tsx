import React, { useMemo } from 'react'
import PortfolioCard from '../PortfolioCard'
import TipBox, { ComponentData as TipProps } from '../TipBox'
import SectionTitle from '../utils/SectionTitle'
import Wrapper from '../utils/Wrapper'

import { Container, Content } from './styles'

interface Projects {
  title: string
  description: string
  picture: string
  openSource: boolean
  repoUrl?: string
  websiteUrl: string
  available?: boolean
}
interface ComponentData {
  title: string
  description: string
  buttonText: string
  projects: Array<Projects>
  tip?: TipProps
}

type Props = {
  data: ComponentData
}

const PortfolioSection: React.FC<Props> = ({ data }) => {
  const { projects } = data

  const cards = useMemo(
    () =>
      projects.map(project => (
        <PortfolioCard
          cardData={project}
          key={project.title}
          buttonText={data.buttonText}
        />
      )),
    [projects]
  )

  return (
    <Container id="portfolio">
      <Wrapper>
        <SectionTitle title={data.title} description={data.description} />
        <Content>{cards}</Content>
      </Wrapper>
      <TipBox data={data.tip} />
    </Container>
  )
}

export default PortfolioSection
