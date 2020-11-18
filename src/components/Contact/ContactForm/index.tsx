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

const yupSchema = Yup.object({
  name: Yup.string().required('Vou precisar do seu nome.'),
  email: Yup.string()
    .email('E-mail inválido!')
    .required('Preciso do seu e-mail para responder.'),
  message: Yup.string().required('Diga algo no e-mail.')
})

interface FormData {
  name: string
  email: string
  message: string
}

const ContactForm: React.FC = () => {
  const resolver = useYupValidationResolver(yupSchema)
  const { handleSubmit, register, errors, reset } = useForm<FormData>({
    resolver,
    mode: 'onBlur'
  })

  const [isLoading, setIsLoading] = useState(false)
  const [hasError, setHasError] = useState(false)

  const submitForm = async (data: FormData): Promise<void> => {
    setIsLoading(true)
    let requestError = true
    const { status } = await Axios.post('/api/send-mail', data)
    if (status === 200) {
      requestError = false
      reset()
    }
    setHasError(requestError)
    setIsLoading(false)
  }

  return (
    <Container onSubmit={handleSubmit(submitForm)}>
      <FormItemContainer>
        <Input
          id="name"
          type="text"
          name="name"
          className="form-field"
          placeholder="Seu nome..."
          ref={register}
          hasError={!!errors?.name}
          disabled={isLoading}
        />
        <ErrorMessage appear={!!errors?.name} message={errors?.name?.message} />
      </FormItemContainer>
      <FormItemContainer>
        <Input
          id="email"
          type="text"
          name="email"
          className="form-field"
          placeholder="Seu e-mail..."
          ref={register}
          hasError={!!errors?.email}
          disabled={isLoading}
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
          placeholder="Seu convite para o café..."
          ref={register}
          hasError={!!errors?.message}
          disabled={isLoading}
        />
        <ErrorMessage
          appear={!!errors?.message}
          message={errors?.message?.message}
        />
      </FormItemContainer>
      <SubmitButton type="submit" disabled={isLoading} isLoading={isLoading}>
        {isLoading ? <Loader /> : 'ENVIAR CAFÉ'}
      </SubmitButton>
    </Container>
  )
}

export default ContactForm
