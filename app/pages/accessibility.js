import { useState, Fragment } from 'react'
import {
  Heading,
  Input,
  Label,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
import Link from 'next/link'

export default function Accessibility() {
  const [value, setValue] = useState('')

  const handleOnChange = (event) => setValue(event.target.value)
  const inputId = 'accessibilityExample'

  const items = [
    { id: 1, name: 'SONY 102HB12', description: 'Headphones' },
    { id: 2, name: 'SONY 292LK90', description: 'Microphone' },
  ]

  const ItemFragment = (item) => (
    <Fragment key={item.id}>
      <dt>{item.name}</dt>
      <dd>{item.description}</dd>
    </Fragment>
  )

  const ItemDiv = (item) => (
    <div key={item.id}>
      <dt>{item.name}</dt>
      <dd>{item.description}</dd>
    </div>
  )

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
      <Section>
        <Subheading>HTML Semantics</Subheading>
        <Paragraph>
          Basically, use the correct HTML for your content. This is one of the
          best ways of improving accessibility and it's super easy.
        </Paragraph>
        <Paragraph>
          Use Fragments instead of divs, using divs will actually break our HTML
          semantics and a benefit of this is that it doesn't add extra nodes to
          the DOM. Inspect these two below in developer tools and compare the
          elements.
        </Paragraph>
        <dl>{items.map((item) => ItemFragment(item))}</dl>
        <dl>{items.map((item) => ItemDiv(item))}</dl>
      </Section>
      <Section>
        <Subheading>Accessible Rich Internet Applications (ARIA)</Subheading>
        <Paragraph>
          All aria-* attributes are supported in React and JSX. They don't use
          camelCase though, they use kebab-case. There is a lot of documentation
          on it, available on sites such as{' '}
          <Link href='https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques'>
            Mozilla
          </Link>
          .
        </Paragraph>
      </Section>
      {/* Focus Control and Navigation */}
    </Main>
  )
}
