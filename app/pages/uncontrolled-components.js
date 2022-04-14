import { useState, useRef } from 'react'
import {
  Button,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from 'components'

function Form() {
  const ref = useRef(null)
  const [color, setColor] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    setColor(ref.current.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="my-4">
        <label className="block text-gray-700 font-bold mb-2" htmlFor="inputA">
          What is your favourite colour?
        </label>
        <input
          className="block shadow appearance-none border rounded py-2 px-3 mb-4 text-gray-700 hover:border-blue-300 focus:outline-none focus:border-blue-500 focus:shadow-outline"
          id="inputA"
          type="text"
          ref={ref}
        />
        <Button>Submit</Button>
      </form>
      {color && <Paragraph>Your favourite colour is: {color}</Paragraph>}
    </>
  )
}

export default function UncontrolledComponents() {
  return (
    <Main>
      <Heading>Uncontrolled Components</Heading>
      <Section>
        <Subheading>One Source of Truth (the DOM)</Subheading>
        <Paragraph>
          Instead of handling data within the component, using either state or
          props, the data is handled by the DOM itself. It isn't really that
          complicated, basically instead of having some state handling an input
          field value, the DOM uses the "value" attribute, and this can be
          fetched from the DOM using refs.
        </Paragraph>
        <Form />
        <Paragraph>
          This is a good approach when trying to combine React and non-React
          code, since you can use the DOM to be the one source of truth rather
          than state and something which well, doens't have any.
        </Paragraph>
      </Section>
    </Main>
  )
}
