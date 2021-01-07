import React, { useMemo } from 'react'
import { FiMonitor } from 'react-icons/fi'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import { SiNextDotJs } from 'react-icons/si'

import Wrapper from '../utils/Wrapper'

import {
  Container,
  Content,
  TechItem,
  InfoBox,
  TechTitle,
  TechDescription
} from './styles'

interface ComponentData {
  title: string
  description: string
  icon: string
}

type Props = {
  data: Array<ComponentData>
}

const iconList = {
  monitor: <FiMonitor />,
  react: <FaReact />,
  node: <FaNodeJs />,
  next: <SiNextDotJs />
}

const TechSection: React.FC<Props> = ({ data }) => {
  const techList = useMemo(
    () =>
      data.map(tech => (
        <TechItem key={tech.title}>
          {iconList[tech.icon]}
          <InfoBox>
            <TechTitle>{tech.title}</TechTitle>
            <TechDescription>{tech.description}</TechDescription>
          </InfoBox>
        </TechItem>
      )),
    [data]
  )

  return (
    <Container>
      <Wrapper>
        <Content>{techList}</Content>
      </Wrapper>
    </Container>
  )
}

export default TechSection
