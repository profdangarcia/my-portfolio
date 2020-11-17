import styled from 'styled-components'
import coffee from './coffee.png'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #111;
  position: absolute;
  z-index: 100;
`

export const Cup = styled.div`
  height: 140px;
  width: 180px;
  border: 6px solid #111;
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  top: 50%;
  border-radius: 0 0 70px 70px;
  background: url(${coffee});
  box-shadow: 0 0 0 6px white;
  background-repeat: repeat-x;
  background-position: 0 140px;
  animation: fill 3s infinite;

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
  height: 70px;
  width: 40px;
  z-index: 100;
  background-color: transparent;
  border: 6px solid white;
  position: relative;
  left: 186px;
  top: 2px;
  border-radius: 0 25px 80px 0;
`
