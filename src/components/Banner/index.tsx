import React, { useMemo } from 'react'
import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaAngleDown,
  FaGithub
} from 'react-icons/fa'
import Typical from 'react-typical'

import { Container, SocialDiv, SocialLink, KeepGoingButton } from './styles'

const Banner: React.FC = () => {
  const bannerType = useMemo(
    () => (
      <Typical
        steps={[
          'Seja bem vindo!',
          1500,
          'Me chamo Daniel',
          1500,
          'Construo sites 💻',
          1500,
          'E amo ☕',
          1500
        ]}
        loop={Infinity}
        wrapper="p"
      />
    ),
    []
  )

  return (
    <Container id="banner">
      {bannerType}
      <SocialDiv>
        <SocialLink
          href="https://www.linkedin.com/in/profdangarcia/"
          target="_blank"
        >
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="https://github.com/profdangarcia" target="_blank">
          <FaGithub />
        </SocialLink>
        <SocialLink
          href="https://www.facebook.com/devDanGarcia"
          target="_blank"
        >
          <FaFacebook />
        </SocialLink>
        <SocialLink
          href="https://www.instagram.com/prof_dangarcia/"
          target="_blank"
        >
          <FaInstagram />
        </SocialLink>
      </SocialDiv>
      <KeepGoingButton href="#about">
        <FaAngleDown />
      </KeepGoingButton>
    </Container>
  )
}

export default Banner
