import React from 'react'

import SectionTitle from '../utils/SectionTitle'
import Wrapper from '../utils/Wrapper'
import ContactForm from './ContactForm'
import { FormProps } from './form'
import { Container } from './styles'
interface ComponentData {
  title: string
  description: string
  form: FormProps
}

type Props = {
  data: ComponentData
}

const Contact: React.FC<Props> = ({ data }) => {
  return (
    <Container id="contact">
      <Wrapper>
        <SectionTitle title={data.title} description={data.description} />
        <ContactForm data={data.form} />
      </Wrapper>
    </Container>
  )
}

export default Contact
