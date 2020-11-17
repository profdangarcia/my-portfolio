import React, { useEffect, useState } from 'react'

import { Container, Cup, Handle } from './styles'

const CoffeeLoading: React.FC = () => {
  const [showLoad, setShowLoad] = useState(false)

  useEffect(() => setShowLoad(true), [])

  setTimeout(() => setShowLoad(false), 3000)

  return (
    <Container showLoad={showLoad}>
      <Cup showLoad={showLoad}>
        <Handle />
      </Cup>
    </Container>
  )
}

export default CoffeeLoading
