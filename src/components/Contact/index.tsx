import React from 'react'

import SectionTitle from '../utils/SectionTitle'
import Wrapper from '../utils/Wrapper'
import ContactForm from './ContactForm'
import { Container } from './styles'

const Contact: React.FC = () => {
  return (
    <Container id="contact">
      <Wrapper>
        <SectionTitle
          title="ENTRE EM CONTATO"
          description="Me mande uma mensagem, me convide para um café! Eu pago!"
        />
        <ContactForm />
      </Wrapper>
    </Container>
  )
}

export default Contact
