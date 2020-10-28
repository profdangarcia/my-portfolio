import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'

import Wrapper from '../utils/Wrapper'
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
  const [isMobile, setIsMobile] = useState(true)

  const handleScroll = () => {
    const windowHeight = window.innerHeight

    if (window.pageYOffset >= windowHeight && !isVisible) {
      setiIsVisible(true)
    }

    if (window.pageYOffset < windowHeight && isVisible) {
      setiIsVisible(false)
      showNav && setShowNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    const windowWidth = window.innerWidth
    windowWidth >= 1024 && setIsMobile(false)
  }, [])

  const navigation = (
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
  )

  return (
    <Container isVisible={isVisible} showNav={showNav}>
      <Wrapper>
        <Nav>
          <VisibleContent>
            <Link href="/">
              <a>
                <Logo
                  alt="Logo"
                  src="https://upload.wikimedia.org/wikipedia/commons/b/ba/LOGO_CATHO.jpg"
                />
              </a>
            </Link>
            {!isMobile && navigation}
            <MenuButton onClick={() => setShowNav(!showNav)}>
              <GoThreeBars />
            </MenuButton>
          </VisibleContent>
          <MobileNavigation showNav={showNav}>
            {isMobile && navigation}
          </MobileNavigation>
        </Nav>
      </Wrapper>
    </Container>
  )
}

export default Header
