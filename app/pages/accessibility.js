import { useState } from 'react'
import {
  Heading,
  Input,
  Label,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function Accessibility() {
  const [value, setValue] = useState('')

  const handleOnChange = (event) => setValue(event.target.value)
  const inputId = 'accessibilityExample'

  return (
    <Main>
      <Heading>Accessibility</Heading>
      <Paragraph>
        To improve the accessibility of a React application, you can do the
        following:
      </Paragraph>
      <Section>
        <Subheading>Forms and Inputs</Subheading>
        <Paragraph>
          You should label each input and use the htmlFor attribute which is
          related to the input field id. This means that when clicking on the
          label, the input itself is focused which is a nice bit of UX. In this
          example I created a const which has been used that for both the
          htmlFor attribute and the input id prop.
        </Paragraph>
        <Label htmlFor={inputId}>Example Label for Input</Label>
        <Input
          id={inputId}
          onChange={handleOnChange}
          type='text'
          value={value}
        />
      </Section>
    </Main>
  )
}
