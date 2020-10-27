import React, { useCallback, useEffect, useState } from 'react'
import { GoThreeBars } from 'react-icons/go'
import { Container, Nav, Logo, MenuButton } from './styles'

const Header: React.FC = () => {
  const [openMenu, setOpenMenu] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset >= 250 && !openMenu) {
      setOpenMenu(true)
    }

    if (window.pageYOffset < 250 && openMenu) {
      setOpenMenu(false)
    }
  }, [openMenu])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container open={openMenu}>
      <Nav>
        <Logo alt="Logo" src="" />
        <MenuButton onClick={() => setOpenMenu(!openMenu)}>
          <GoThreeBars />
        </MenuButton>
      </Nav>
    </Container>
  )
}

export default Header
