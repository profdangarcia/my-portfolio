import React, { useState } from 'react'
import {
  FaArrowAltCircleUp,
  FaArrowAltCircleDown,
  FaGithub
} from 'react-icons/fa'

import { Container, TipTop, TipBody, TipTitle, TipMessage } from './styles'

export interface ComponentData {
  title: string
  message: string
  url: string
}

type Props = {
  data: ComponentData
}

const TipBox: React.FC<Props> = ({ data: { title, message, url } }) => {
  const [visible, setVisible] = useState(false)

  const DownSideArrow = (
    <FaArrowAltCircleDown className="bouncing short-bouncing" />
  )
  const UpSideArrow = <FaArrowAltCircleUp className="bouncing short-bouncing" />

  return (
    <Container
      visible={visible}
      onMouseOver={() => setVisible(true)}
      onMouseOut={() => setVisible(false)}
    >
      <TipTop>
        {visible ? DownSideArrow : UpSideArrow}
        <TipTitle>{title}</TipTitle>
      </TipTop>
      <TipBody href={url} target="_blank">
        <FaGithub />
        <TipMessage>{message}</TipMessage>
      </TipBody>
    </Container>
  )
}

export default TipBox
