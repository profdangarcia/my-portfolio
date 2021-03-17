import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'

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

type link = {
  name: string
  url: string
}
interface Props {
  data: {
    links: Array<link>
  }
  isHome?: boolean
}

const Header: React.FC<Props> = ({ data: { links }, isHome = true }) => {
  const [isVisible, setiIsVisible] = useState(!isHome)
  const [showNav, setShowNav] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  const closeNavigation = useCallback(() => {
    if (showNav) {
      setShowNav(false)
    }
  }, [showNav])

  const handleScroll = () => {
    const windowHeight = window.innerHeight

    if (window.pageYOffset >= windowHeight && !isVisible && isHome) {
      setiIsVisible(true)
    }

    if (window.pageYOffset < windowHeight && isVisible && isHome) {
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
    <>
      <Container
        isVisible={isVisible}
        showNav={showNav}
        onBlur={closeNavigation}
        isHome={isHome}
      >
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
    </>
  )
}

export default Header
