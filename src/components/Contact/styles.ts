import styled from 'styled-components'

export const Container = styled.div`
  padding: 30px 0 70px;
`

export const ContactForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 15px auto 0;

  .form-field {
    background: none;
    border: 0;
    border-bottom: solid 1px #dfdfdf;
    margin-top: 15px;
    color: ${props => props.theme.colors.text};
    font-size: 13px;
    font-family: Poppins, sans-serif;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    .form-field {
      font-size: 14px;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;

  @media (min-width: ${props => props.theme.screens.medium}) {
    width: 46%;
    &:first-child {
      margin-right: 8%;
    }
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 0 0 15px;
`

export const SubmitButton = styled.button`
  transition: all ease 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  border: 2px solid #000;
  width: 215px;
  height: 40px;
  border-radius: 50px;
  color: ${props => props.theme.colors.textTitle};
  font-family: Montserrat, sans-serif;
  font-weight: 600;

  &:hover {
    background: #000;
    color: #fff;
  }
`
