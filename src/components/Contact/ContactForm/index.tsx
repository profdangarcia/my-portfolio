import React, { useState } from 'react'
import Axios from 'axios'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { useYupValidationResolver } from '../../../hooks'
import ErrorMessage from './ErrorMessage'
import {
  Container,
  FormItemContainer,
  Input,
  TextArea,
  SubmitButton
} from './styles'
import Loader from '../../Loader'
import { FormProps } from '../form'
interface FormData {
  name: string
  email: string
  message: string
}

type Props = {
  data: FormProps
}

const ContactForm: React.FC<Props> = ({ data }) => {
  const yupSchema = Yup.object({
    name: Yup.string().required(data.name.error),
    email: Yup.string()
      .email(data.email.errorInvalid)
      .required(data.email.error),
    message: Yup.string().required(data.message.error)
  })

  const resolver = useYupValidationResolver(yupSchema)
  const { handleSubmit, register, errors, reset } = useForm<FormData>({
    resolver,
    mode: 'onBlur'
  })

  const [formStatus, setFormStatus] = useState('form')

  const submitForm = async (data: FormData): Promise<void> => {
    setFormStatus('loading')
    let requestError = 'error'
    const { status } = await Axios.post('/api/send-mail', data)
    console.log(status)
    if (status === 200) {
      requestError = 'success'
      reset()
    }
    setFormStatus(requestError)
    setTimeout(() => setFormStatus('form'), 2500)
  }

  const buttonContent = () => {
    const availableOptions = {
      form: data.default,
      loading: <Loader />,
      error: data.error,
      success: data.success
    }

    return availableOptions[formStatus]
  }

  return (
    <Container onSubmit={handleSubmit(submitForm)}>
      <FormItemContainer>
        <Input
          id="name"
          type="text"
          name="name"
          className="form-field"
          placeholder={data.name.placeholder}
          ref={register}
          hasError={!!errors?.name}
          disabled={formStatus === 'loading'}
        />
        <ErrorMessage appear={!!errors?.name} message={errors?.name?.message} />
      </FormItemContainer>
      <FormItemContainer>
        <Input
          id="email"
          type="text"
          name="email"
          className="form-field"
          placeholder={data.email.placeholder}
          ref={register}
          hasError={!!errors?.email}
          disabled={formStatus === 'loading'}
        />
        <ErrorMessage
          appear={!!errors?.email}
          message={errors?.email?.message}
        />
      </FormItemContainer>
      <FormItemContainer fullSize>
        <TextArea
          id="message"
          name="message"
          rows={8}
          className="form-field"
          placeholder={data.message.placeholder}
          ref={register}
          hasError={!!errors?.message}
          disabled={formStatus === 'loading'}
        />
        <ErrorMessage
          appear={!!errors?.message}
          message={errors?.message?.message}
        />
      </FormItemContainer>
      <SubmitButton
        type="submit"
        disabled={formStatus === 'loading'}
        formStatus={formStatus}
      >
        {buttonContent()}
      </SubmitButton>
    </Container>
  )
}

export default ContactForm
