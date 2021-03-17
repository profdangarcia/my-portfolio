import styled from 'styled-components'

interface TextBlockProps {
  isTitle?: boolean
}

export const Container = styled.div`
  width: 100%;
  height: 350px;
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.07),
    0 4px 8px rgba(0, 0, 0, 0.07), 0 8px 16px rgba(0, 0, 0, 0.07),
    0 16px 32px rgba(0, 0, 0, 0.07), 0 32px 64px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 1px;
  border-bottom: 4px solid gray;
`
export const ImageBox = styled.div`
  width: 100%;
  min-height: 200px;
`

export const CardBody = styled.div`
  padding: 5px 5px 10px;
`

export const TextBlock = styled.div<TextBlockProps>`
  width: 100%;
  max-width: ${props => (props.isTitle ? '210px' : 'auto')};
  height: ${props => (props.isTitle ? '30px' : '10px')};
  margin-bottom: ${props => (props.isTitle ? '20px' : '0')};
  margin-top: 5px;
`
