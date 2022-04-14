import {
  CodeBlock,
  CodeSnippit,
  FocusedButton,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from 'components'
import { ExampleRef } from '../code'

export default function DomAndRefs() {
  return (
    <Main>
      <Heading>DOM and Refs</Heading>
      <Section>
        <Subheading>DOM and Refs</Subheading>
        <Paragraph>
          Not all user interfaces can be achieved using purely "React", to
          re-render a child you would render it with new props, but sometimes
          the thing you want to do is not possible using props or state. In this
          case, we may need to use Refs, this provides a way to access DOM
          nodes, or React elements created by the render method. The most common
          use case for refs is managing focus of a button or input field. For
          example, rendering a modal and focusing the first input field so the
          transition for keyboard users is smooth. Refs can also be used for
          text selection, media playback, triggering animations and integrating
          with third-party DOM libraries which don't use React. In an ideal
          world, we don't want to use refs.
        </Paragraph>
        <Paragraph>
          Below we have a simple example of a button, which on first render
          focuses. We can just hit our enter key and it will increase the count
          rather than manually using our cursor.
        </Paragraph>
        <FocusedButton />
        <CodeBlock code={ExampleRef} />
        <Paragraph>
          One common theme from what I've noticed is to try and figure out the
          problem first with state, or props, then if all else fails use refs.
          Basically only use refs when the behaviour isn't controllable in
          React.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Forwarding Refs</Subheading>
        <Paragraph>
          React can't pass refs as a prop to functional components, "Function
          components cannot be given refs. Attempts to access this ref will
          fail". However, we can use{' '}
          <CodeSnippit code="React.forwardRef()" displayInline />, which creates
          a React component and accepts two arguments; props and ref. This is
          similar to lifting state I suppose, you can have a parent with a ref,
          and pass it to this child component, which uses{' '}
          <CodeSnippit code="forwardRef()" displayInline />.
        </Paragraph>
        <CodeSnippit
          code={`React.forwardRef((props, ref) => <button ref={ref}>{props.children}</button>)`}
        />
      </Section>
    </Main>
  )
}
