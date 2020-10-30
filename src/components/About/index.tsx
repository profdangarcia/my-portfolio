import React, { useState, useEffect, useCallback } from 'react'

import {
  Container,
  Content,
  DevPicture,
  AboutContainer,
  AboutTitle,
  AboutText
} from './styles'

const About: React.FC = () => {
  const [animate, setAnimate] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset >= 90 && !animate) {
      setAnimate(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  return (
    <Container id="about">
      <Content>
        <DevPicture src="/dev.png" alt="Dan Garcia - Dev" animate={animate} />
        <AboutContainer animate={animate}>
          <AboutTitle>Entre e tome uma xícara de café...</AboutTitle>
          <AboutText>
            Meu nome é Daniel e sou apaixonado por tecnologia. Possuo um perfil
            voltado ao frontend mas também me aventuro no backend. Trabalhei
            alguns anos por conta própria e hoje sou Desenvolvedor Frontend pela
            Catho.
          </AboutText>
          <AboutText>
            Gosto de resolver desafios e atualmente concentro meus estudos em
            backend, React e NextJS❤️
          </AboutText>
        </AboutContainer>
      </Content>
    </Container>
  )
}

export default About
