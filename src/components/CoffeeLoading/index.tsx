import React, { useEffect, useState } from 'react'

import { Container, Cup, Handle } from './styles'

const CoffeeLoading: React.FC = () => {
  const [showLoad, setShowLoad] = useState(true)
  const [showCup, setShowCup] = useState(false)

  useEffect(() => {
    const sawLoading = sessionStorage.getItem('@dan-dev:coffe-loaded')
    if (!sawLoading) {
      setTimeout(() => setShowCup(true), 50)
      setTimeout(() => {
        setShowCup(false)
        setShowLoad(false)
      }, 3000)
      sessionStorage.setItem('@dan-dev:coffe-loaded', 'true')
    }
    setShowLoad(false)
  }, [])

  return (
    <Container showLoad={showLoad}>
      <Cup showLoad={showCup}>
        <Handle />
      </Cup>
    </Container>
  )
}

export default CoffeeLoading
