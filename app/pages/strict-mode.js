import { Heading, Main, Paragraph, Section, Subheading } from 'components'

export default function StrictMode() {
  return (
    <Main>
      <Heading>Strict Mode</Heading>
      <Section>
        <Subheading>You should use Strict Mode</Subheading>
        <Paragraph>
          Strict Mode is a tool used for showing any potential problems in a
          React app, create-react-app uses it as default. It doesn't render any
          visible UI and it does not impact production builds. Strict mode will
          catch: Unsafe lifecycles within Class components; Legacy usage of ref
          and context APIs; Unexpected side effects; and Depecated findDOMNode
          usage. React frameworks such as NextJS can enable strict mode too.
        </Paragraph>
      </Section>
    </Main>
  )
}
