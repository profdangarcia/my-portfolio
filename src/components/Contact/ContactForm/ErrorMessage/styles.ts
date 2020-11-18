import styled from 'styled-components'

interface ErrorProps {
  appear: boolean
}

export const Container = styled.div`
  height: 25px;
  margin-top: 5px;
  position: relative;
  width: 100%;
`

export const Message = styled.span`
  width: 100%;
  color: ${props => props.theme.colors.error};
  transform: ${(props: ErrorProps) =>
    props.appear ? 'translateY(0)' : 'translateY(10px)'};
  transition: 0.5s ease-in-out;
  position: absolute;
  text-align: center;
`
