import styled from 'styled-components'
import coffee from './coffee.png'

interface LoadProps {
  showLoad: boolean
}

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111;
  position: absolute;
  z-index: ${(props: LoadProps) => (props.showLoad ? '100' : '-20')};
  opacity: ${(props: LoadProps) => (props.showLoad ? '1' : '0')};
  transition: 0.5s ease-in-out;
`

export const Cup = styled.div`
  height: 100px;
  width: 140px;
  border: 6px solid #111;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  border-radius: 2px 2px 50px 50px;
  background: url(${coffee});
  box-shadow: 0 0 0 6px white;
  background-repeat: repeat-x;
  background-position: 0 140px;
  animation: fill 4.5s infinite;
  transform: ${(props: LoadProps) =>
    props.showLoad ? 'translateX(0)' : 'translateX(-100vw)'};
  transition: 1s ease-in-out;

  @media (min-width: ${props => props.theme.screens.medium}) {
    height: 140px;
    width: 180px;
    border-radius: 2px 2px 70px 70px;
  }

  @keyframes fill {
    0% {
      background-position: 0px 140px;
    }
    20% {
      background-position: -450px 100px;
    }
    40% {
      background-position: -900px 50px;
    }
    60% {
      background-position: -1200px 10px;
    }
    80% {
      background-position: -1350px -40px;
    }
    100% {
      background-position: 0px 140px;
    }
  }
`

export const Handle = styled.div`
  height: 50px;
  width: 35px;
  z-index: 100;
  background-color: transparent;
  border: 6px solid white;
  position: relative;
  left: 146px;
  top: -2px;
  border-radius: 0 8px 25px 0;

  @media (min-width: ${props => props.theme.screens.medium}) {
    height: 70px;
    width: 40px;
    border-radius: 0 25px 80px 0;
    left: 186px;
    top: 2px;
  }
`
