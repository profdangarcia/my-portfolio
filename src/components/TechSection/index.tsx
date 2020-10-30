import React from 'react'
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

const TechSection: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Content>
          <TechItem>
            <FiMonitor />
            <InfoBox>
              <TechTitle>DE TUDO UM POUCO</TechTitle>
              <TechDescription>
                Do PHP ao Python, já vi muita coisa! Mas atualmente meu foco tem
                sido nas seguintes tecnologias:
              </TechDescription>
            </InfoBox>
          </TechItem>
          <TechItem>
            <FaReact />
            <InfoBox>
              <TechTitle>REACTJS</TechTitle>
              <TechDescription>
                Uma biblioteca Javascript que lhe fornece super poderes na
                criação de interfaces
              </TechDescription>
            </InfoBox>
          </TechItem>
          <TechItem>
            <FaNodeJs />
            <InfoBox>
              <TechTitle>NODEJS</TechTitle>
              <TechDescription>
                Javascript nunca é demais... e seu potencial no backend é
                indiscutível
              </TechDescription>
            </InfoBox>
          </TechItem>
          <TechItem>
            <SiNextDotJs />
            <InfoBox>
              <TechTitle>NEXTJS</TechTitle>
              <TechDescription>
                Framework para trabalhar com React possibilitando otimizações
                incríveis com SSR e SSG
              </TechDescription>
            </InfoBox>
          </TechItem>
        </Content>
      </Wrapper>
    </Container>
  )
}

export default TechSection
