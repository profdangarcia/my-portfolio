import styled from 'styled-components'

interface ContainerProps {
  fullSize?: boolean
}

interface FormItemProps {
  hasError: boolean
}

interface ButtonProps {
  formStatus: string
}

export const Container = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  margin: 15px auto 0;

  .form-field {
    background: none;
    margin-top: 15px;
    color: ${props => props.theme.colors.text};
    font-size: 13px;
    font-family: Poppins, sans-serif;
    border-radius: 4px;
    transition: 0.5s ease-in-out;
  }

  @media (min-width: ${props => props.theme.screens.medium}) {
    .form-field {
      font-size: 14px;
    }
  }
`

export const FormItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media (min-width: ${props => props.theme.screens.medium}) {
    max-width: ${(props: ContainerProps) => (props.fullSize ? '100%' : '46%')};
    &:first-child {
      margin-right: 8%;
    }
  }
`

export const Input = styled.input`
  width: 100%;
  height: 45px;
  padding-left: 15px;
  border: ${(props: FormItemProps) =>
    props.hasError ? '1px solid #ff3d3d' : '0'};
  border-bottom: ${(props: FormItemProps) =>
    props.hasError ? '1px solid #ff3d3d' : 'solid 1px #dfdfdf'};
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px 0 0 15px;
  border: ${(props: FormItemProps) =>
    props.hasError ? '1px solid #ff3d3d' : '0'};
  border-bottom: ${(props: FormItemProps) =>
    props.hasError ? '1px solid #ff3d3d' : 'solid 1px #dfdfdf'};
`

const retrieveButtonBg = (type: string) => {
  const options = {
    success: '#25D366',
    form: 'none',
    error: '#db4437',
    loading: '#000'
  }
  return options[type]
}

export const SubmitButton = styled.button`
  position: relative;
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
  background: ${(props: ButtonProps) => retrieveButtonBg(props.formStatus)};

  &:hover {
    background: ${(props: ButtonProps) =>
      props.formStatus === 'form'
        ? '#000'
        : retrieveButtonBg(props.formStatus)};
    color: #fff;
  }
`
