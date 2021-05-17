import { Heading, Main, Paragraph, Section, Subheading } from '../components'
import withInteractable from '../helpers/withInteractable'

export default function HigherOrderComponents() {
  const InteractableParagraph = withInteractable(Paragraph)

  return (
    <Main>
      <Heading>Higher Order Components</Heading>
      <Section>
        <Subheading>Re-using Component Logic</Subheading>
        <Paragraph>
          A React pattern for reusing component logic easily. As a definition, a
          higher-order component is a function which takes a component and
          returns a new one. There are some rather popular examples of
          higher-order components for example Redux's connect(), or "draggable"
          component libraries such as react-draggable. Below is a simple example
          of a higher order component; just a component which has a count state.
        </Paragraph>
        <InteractableParagraph>
          {`const InteractableParagraph = withInteractable(Paragraph)`}
        </InteractableParagraph>
      </Section>
    </Main>
  )
}
