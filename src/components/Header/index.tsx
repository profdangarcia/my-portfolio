import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'
import {
  Container,
  Nav,
  VisibleContent,
  Logo,
  MenuButton,
  MobileNavigation,
  NavList,
  NavItem
} from './styles'

const Header: React.FC = () => {
  const [isVisible, setiIsVisible] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.pageYOffset >= 250 && !isVisible) {
      setiIsVisible(true)
    }

    if (window.pageYOffset < 250 && isVisible) {
      setiIsVisible(false)
      setShowNav(false)
    }
  }, [isVisible, showNav])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (
    <Container isVisible={isVisible} showNav={showNav}>
      <Nav>
        <VisibleContent>
          <Link href="/">
            <a>
              <Logo alt="Logo" src="" />
            </a>
          </Link>
          <MenuButton onClick={() => setShowNav(!showNav)}>
            <GoThreeBars />
          </MenuButton>
        </VisibleContent>
        <MobileNavigation showNav={showNav}>
          <NavList>
            <NavItem>
              <Link href="#">
                <a>Home</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <a>Sobre</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <a>Portfólio</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <a>Blog</a>
              </Link>
            </NavItem>
            <NavItem>
              <Link href="#">
                <a>Contato</a>
              </Link>
            </NavItem>
          </NavList>
        </MobileNavigation>
      </Nav>
    </Container>
  )
}

export default Header
