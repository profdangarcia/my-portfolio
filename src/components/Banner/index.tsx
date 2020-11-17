import React, { useMemo } from 'react'
import Typical from 'react-typical'
import { FaAngleDown } from 'react-icons/fa'

import { Container, KeepGoingButton } from './styles'
import SocialLinks from '../utils/SocialLinks'

const Banner: React.FC = () => {
  const bannerType = useMemo(
    () => (
      <Typical
        steps={[
          'Seja bem vindo!',
          3000,
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
      <SocialLinks />
      <KeepGoingButton href="#about">
        <FaAngleDown />
      </KeepGoingButton>
    </Container>
  )
}

export default Banner
