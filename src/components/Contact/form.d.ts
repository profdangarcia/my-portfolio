export interface FormProps {
  name: {
    placeholder: string
    error: string
  }
  email: {
    placeholder: string
    error: string
    errorInvalid: string
  }
  message: {
    placeholder: string
    error: string
  }
  error: string
  success: string
  default: string
}
