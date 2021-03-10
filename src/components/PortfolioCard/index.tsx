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

export interface CardProps {
  cardData: {
    title: string
    description: string
    picture: string
    openSource: boolean
    repoUrl?: string
    websiteUrl: string
    available?: boolean
  }
  buttonText: string
}

const PortfolioCard: React.FC<CardProps> = ({ cardData, buttonText }) => {
  const seeMoreButton = (
    <SeeMoreBtn href={cardData.websiteUrl} target="_blank">
      {buttonText}
    </SeeMoreBtn>
  )

  return (
    <Container>
      <ImgBox data-text="OCC">
        <CardImg
          src={cardData.picture}
          alt={cardData.title}
          loading="lazy"
          available={cardData.available}
        />
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
          {cardData.available && seeMoreButton}
        </Content>
      </ContentContainer>
    </Container>
  )
}

export default PortfolioCard
