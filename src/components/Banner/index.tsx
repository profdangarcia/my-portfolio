import React, { useMemo } from 'react'
import { FaLinkedin, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import Typical from 'react-typical'

import { Container, SocialDiv, SocialLink } from './styles'

const Banner: React.FC = () => {
  const bannerType = useMemo(
    () => (
      <Typical
        steps={[
          'Seja bem vindo!',
          1000,
          'Me chamo Daniel',
          1000,
          'Construo sites 💻',
          1000,
          'E amo ☕',
          1000
        ]}
        loop={Infinity}
        wrapper="h1"
      />
    ),
    []
  )

  return (
    <Container>
      {bannerType}
      <SocialDiv>
        <SocialLink href="#" target="_blank">
          <FaLinkedin />
        </SocialLink>
        <SocialLink href="#" target="_blank">
          <FaFacebook />
        </SocialLink>
        <SocialLink href="#" target="_blank">
          <FaInstagram />
        </SocialLink>
        <SocialLink href="#" target="_blank">
          <FaTwitter />
        </SocialLink>
      </SocialDiv>
    </Container>
  )
}

export default Banner
