import React from 'react'

import {
  Container,
  OpenSrcFlag,
  ImgBox,
  CardImg,
  ContentContainer,
  Content,
  Title,
  Description,
  SeeMoreBtn
} from './styles'

interface CardProps {
  cardData: {
    title: string
    description: string
    picture: string
    openSource: boolean
    repoUrl?: string
    websiteUrl: string
  }
}

const PortfolioCard: React.FC<CardProps> = ({ cardData }) => {
  return (
    <Container>
      <ImgBox data-text="OCC">
        <CardImg src={cardData.picture} alt={cardData.title} loading="lazy" />
      </ImgBox>
      {cardData.openSource && (
        <OpenSrcFlag>
          <a href={cardData.repoUrl} target="_blank" rel="noreferrer">
            Open Source
          </a>
        </OpenSrcFlag>
      )}

      <ContentContainer>
        <Content>
          <Title>{cardData.title}</Title>
          <Description>{cardData.description}</Description>
          <SeeMoreBtn href={cardData.websiteUrl} target="_blank">
            Veja Mais
          </SeeMoreBtn>
        </Content>
      </ContentContainer>
    </Container>
  )
}

export default PortfolioCard
