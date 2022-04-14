import {
  Heading,
  Link,
  Main,
  Paragraph,
  Section,
  Subheading,
} from 'components'

export default function TypeChecking() {
  return (
    <Main>
      <Heading>Type Checking</Heading>
      <Section>
        <Subheading>Don't have TypeScript?</Subheading>
        <Paragraph>
          Typechecking is a pretty common tool for catching a lot of bugs in an
          application; the popular JavaScript superset TypeScript can typecheck
          entire applications. In pure JavaScript, we can use{' '}
          <Link href="https://github.com/facebook/prop-types">PropTypes</Link>{' '}
          to do this.
        </Paragraph>
      </Section>
    </Main>
  )
}
