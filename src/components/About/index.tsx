import React, { useState, useEffect, useCallback, useMemo } from 'react'

import {
  Container,
  Content,
  DevPicture,
  AboutContainer,
  AboutTitle,
  AboutText
} from './styles'

interface ComponentData {
  title: string
  messages: Array<string>
}

type Props = {
  data: ComponentData
}

const About: React.FC<Props> = ({ data }) => {
  const [animate, setAnimate] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset >= 200 && !animate) {
      setAnimate(true)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  const aboutMessages = useMemo(
    () =>
      data.messages.map(message => (
        <AboutText key={message}>{message}</AboutText>
      )),
    [data]
  )

  return (
    <Container id="about">
      <Content>
        <DevPicture src="/dev.png" alt="Dan Garcia - Dev" animate={animate} />
        <AboutContainer animate={animate}>
          <AboutTitle>{data.title}</AboutTitle>
          {aboutMessages}
        </AboutContainer>
      </Content>
    </Container>
  )
}

export default About
