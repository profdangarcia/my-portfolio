import React, { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { GoThreeBars } from 'react-icons/go'

import { checkIsMobile, isInViewport } from '../../utils'
import Wrapper from '../utils/Wrapper'
import {
  Container,
  Nav,
  VisibleContent,
  Logo,
  TextLogo,
  MenuButton,
  MobileNavigation,
  NavList,
  NavItem
} from './styles'

type link = {
  name: string
  url: string
  id?: string
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
  const [focusedElement, setFocusedElement] = useState('')

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

    let focused = ''
    if (isHome) {
      links.map(link => {
        if (link.id) {
          const element = document.querySelector(link.id)
          const isTheFocus = isInViewport(element)
          if (isTheFocus) {
            focused = link.id
          }
        }
      })
    }
    if (focused !== focusedElement) {
      setFocusedElement(focused)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  })

  useEffect(() => {
    const isMobileDevice = checkIsMobile()
    !isMobileDevice && setIsMobile(false)
  }, [isHome])

  const navItems = useMemo(
    () =>
      links.map(link => (
        <NavItem key={link.name} inFocus={focusedElement === link.id}>
          <Link href={link.url}>
            <a>{link.name}</a>
          </Link>
        </NavItem>
      )),
    [links, focusedElement]
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
                  {isHome ? (
                    <Logo>DAN GARCIA</Logo>
                  ) : (
                    <TextLogo>DAN GARCIA</TextLogo>
                  )}
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
