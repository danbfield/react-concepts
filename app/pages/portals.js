import { useEffect, useState } from 'react'
import {
  Button,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
import Portal from '../helpers/Portal'

export default function Portals() {
  const [summoned, setSummoned] = useState(false)
  const [node, setNode] = useState(null)

  useEffect(() => {
    // node which is the element of the ID domNodeA, on first render
    // this would be null. Since we're using NextJS, we're wrapping this
    // in a useEffect because document is undefined when rendering
    // on the server
    setNode(document.getElementById('domNodeA'))
  }, [])

  return (
    <Main>
      <Heading>Portals</Heading>
      <Section>
        <Subheading>It's Magic</Subheading>
        <Paragraph>
          Portals are a neat way of rendering components into the DOM tree
          outside of a React tree. You can specify which node you want the
          parent of the portal to be. So, lets take the simple example below. In
          the React tree, it goes from A to D. However, clicking the summon
          magic component button, will render the fourth component after B
          because its DOM container node is domNodeA (which is where A and B
          reside); even though in the React tree it resides with C.
        </Paragraph>
        <Paragraph>
          Because React and the DOM trees aren't actually the same thing, we can
          do some cool stuff with Context. We could basically wrap a component
          in some Context, and then render it using our magic portals in part of
          the DOM where this Context has no business being.
        </Paragraph>
        <Button changeHandler={() => setSummoned(!summoned)}>
          {summoned ? 'Remove' : 'Summon'} D
        </Button>
        <div id="domNodeA">
          <Paragraph>A</Paragraph>
          <Paragraph>B</Paragraph>
        </div>
        <div id="domNodeB">
          <Paragraph>C</Paragraph>
          {summoned && node && (
            <Portal domLocation={node}>
              <Paragraph>D</Paragraph>
            </Portal>
          )}
        </div>
      </Section>
    </Main>
  )
}
