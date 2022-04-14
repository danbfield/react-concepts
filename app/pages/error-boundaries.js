import {
  CodeSnippit,
  Heading,
  Link,
  Main,
  Paragraph,
  Section,
  Subheading,
} from 'components'

export default function ErrorBoundaries() {
  return (
    <Main>
      <Heading>Error Boundaries</Heading>
      <Section>
        <Subheading>Error Boundaries</Subheading>
        <Paragraph>
          I've already covered error boundaries as part of the{' '}
          <Link href="/code-splitting">code splitting</Link> section which shows
          a neat example. But in summary, these are a React way of catching
          errors anywhere in a component tree, logging these and displaying
          fallback interfaces. These errors can be caught during render, in
          lifecycle methods, and in constructors (for class based components).
        </Paragraph>
        <Paragraph>
          Components become an error boundary if they have either{' '}
          <CodeSnippit code="getDerivedStateFromError()" displayInline /> or{' '}
          <CodeSnippit code="componentDidCatch()" displayInline />. It's worth
          noting that error boundaries do not catch errors inside of event
          handlers.
        </Paragraph>
      </Section>
    </Main>
  )
}
