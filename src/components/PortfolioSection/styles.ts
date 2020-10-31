import styled from 'styled-components'

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  width: 100%;
`

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin: 20px;
  width: 100%;
  position: relative;
  /* padding: 0 50px; */
`
