import React, { useEffect, useState } from 'react'
import Typical from 'react-typical'
import { FaAngleDown } from 'react-icons/fa'

import { Container, KeepGoingButton } from './styles'
import SocialLinks from '../utils/SocialLinks'

interface Props {
  data: Array<string>
}

const Banner: React.FC<Props> = ({ data }) => {
  let bannerType = <p>...</p>

  const [typingData, setTypingData] = useState(bannerType)

  useEffect(() => {
    setTypingData(bannerType)
    setTimeout(() => {
      bannerType = (
        <Typical
          steps={[data[0], 3000, data[1], 1500, data[2], 1500, data[3], 1500]}
          loop={Infinity}
          wrapper="p"
        />
      )
      setTypingData(bannerType)
    }, 500)
  }, [data])

  return (
    <Container id="banner">
      {typingData}
      <SocialLinks />
      <KeepGoingButton href="#about">
        <FaAngleDown className="bouncing great-bouncing" />
      </KeepGoingButton>
    </Container>
  )
}

export default Banner
