import React from 'react'

import SectionTitle from '../utils/SectionTitle'
import Wrapper from '../utils/Wrapper'
import { Container, ContactForm, Input, TextArea, SubmitButton } from './styles'

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <SectionTitle
          title="ENTRE EM CONTATO"
          description="Me mande uma mensagem, me convide para um café! Eu pago!"
        />
        <ContactForm>
          <Input
            id="name"
            type="text"
            name="name"
            className="form-field"
            placeholder="Seu nome..."
          />
          <Input
            id="email"
            type="text"
            name="email"
            className="form-field"
            placeholder="Seu e-mail..."
          />
          <TextArea
            id="message"
            name="message"
            rows={8}
            className="form-field"
            placeholder="Seu convite para o café..."
          />
          <SubmitButton type="submit">ENVIAR CAFÉ</SubmitButton>
        </ContactForm>
      </Wrapper>
    </Container>
  )
}

export default Contact
