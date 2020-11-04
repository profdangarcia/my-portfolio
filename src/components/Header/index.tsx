import React, { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'

import headerData from './data'
import { checkIsMobile } from '../../utils'
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
  const { links } = headerData
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
    const isMobileDevice = checkIsMobile()
    !isMobileDevice && setIsMobile(false)
  }, [])

  const navItems = useMemo(
    () =>
      links.map(link => (
        <NavItem key={link.name}>
          <Link href={link.url}>
            <a>{link.name}</a>
          </Link>
        </NavItem>
      )),
    [links]
  )

  const navigation = <NavList>{navItems}</NavList>

  return (
    <Container isVisible={isVisible} showNav={showNav}>
      <Wrapper>
        <Nav>
          <VisibleContent>
            <Link href="/">
              <a>
                <Logo>DAN GARCIA</Logo>
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
