import styled from 'styled-components'

interface HeaderProps {
  readonly isVisible?: boolean
  readonly showNav: boolean
}

export const Container = styled.header<HeaderProps>`
  width: 100%;
  position: fixed;
  max-height: ${props => (props.showNav ? '500px' : '92px')};
  overflow: hidden;
  margin: ${props => (props.isVisible ? '0 0 0 0' : '-92px 0 0 0')};
  background: #fff;
  padding: 30px 0;
  box-shadow: -5px 10px 12px -10px rgba(201, 201, 201, 0.67);
  transition: 0.5s ease-in-out;
`
export const Nav = styled.nav``

export const VisibleContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    color: #666;
    font-size: 23px;
  }

  & a:first-child {
    height: 25px;
    width: 104px;
  }
`

export const Logo = styled.img`
  width: 104px;
  height: 25px;
  object-fit: cover;
`

export const MenuButton = styled.button`
  @media (min-width: ${props => props.theme.screens.medium}) {
    display: none;
  }
`

export const MobileNavigation = styled.div<HeaderProps>`
  opacity: ${props => (props.showNav ? '1' : '0')};
  transition: opacity 0.2s ease-in;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: ${props => props.theme.screens.medium}) {
    display: none;
  }
`

export const NavList = styled.ul`
  list-style: none;
  width: 100%;
  margin-top: 20px;

  @media (min-width: ${props => props.theme.screens.medium}) {
    display: flex;
    justify-content: flex-end;
    margin-top: 0;

    & li:not(:last-child) {
      margin-right: 10px;
    }
  }
`

export const NavItem = styled.li`
  text-align: center;
  height: 45px;
  line-height: 45px;
  border-top: 1px solid #f7f7f7;
  width: 100%;

  a {
    text-decoration: none;
    color: #000;
    transition: 0.2s ease-in;
  }

  a:hover {
    color: #666;
    font-size: 16px;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    border-top: 0;
    width: 60px;
  }
`
