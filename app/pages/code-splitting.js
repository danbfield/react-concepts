import { useState } from 'react'
import {
  CodeBlock,
  CodeSnippit,
  BuggedCounter,
  Button,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
import { double } from '../helpers/Double'
import { ExampleImports } from '../code'
import Boundary from '../helpers/Boundary'

export default function CodeSplitting() {
  const [regularValue, setRegularValue] = useState(1)
  const [dynamicValue, setDynamicValue] = useState(1)

  const handleRegularAdd = () => {
    setRegularValue(double(regularValue))
  }

  const handleDyanmicAdd = () => {
    import('../helpers/Double').then((split) => {
      setDynamicValue(split.double(dynamicValue))
    })
  }

  return (
    <Main>
      <Heading>Code Splitting</Heading>
      <Paragraph>
        To avoid the code base getting too big, code can be split into different
        bundles; there's a couple of ways to do this.
      </Paragraph>
      <Section>
        <Subheading>Bundles</Subheading>
        <Paragraph>
          Bundling is the process of importing files, and merging them into a
          single file. This bundle is then included on a web page to load the
          entire app at once. Most React apps (such as those using
          create-react-app) will be bundled already using Webpack.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Dyanmic Imports</Subheading>
        <Paragraph>
          Imports can be well, imported, dynamically. This means it'll only be
          imported when it is needed which improves the performance of the
          application. Bundlers such as webpack will see this dynamic import and
          automatically begin code-splitting the app. The imported functions
          behave the same way, for example these two buttons.
        </Paragraph>
        <Button
          changeHandler={() => {
            setRegularValue(1)
            setDynamicValue(1)
          }}
        >
          Reset Values
        </Button>
        <Button changeHandler={handleRegularAdd}>
          Double Regular: {regularValue}
        </Button>
        <Button changeHandler={handleDyanmicAdd}>
          Double Dyanamic: {dynamicValue}
        </Button>
        <CodeBlock code={ExampleImports} />
      </Section>
      <Section>
        <Subheading>Lazy Imports</Subheading>
        <Paragraph>
          React.lazy is a function which you can use to dynamically import a
          regular component. This means it will automatically load the bundle
          which contains the lazy component when it is required.
        </Paragraph>
        <Paragraph>{`const Component = React.lazy(() => import('./Component'))`}</Paragraph>
        <Paragraph>
          Lazy loaded components must be rendered inside of a Suspsense
          component, which means we can show fallback content while it loads.
          This would be a good place for loading spinners or things like that.
          This fallback prop accepts any React element, or multiple of.
        </Paragraph>
        <Paragraph>
          The perfect place to introduce lazy loading would be to the router.
          You can wrap a Switch within a Suspense and load these route
          components in a lazy manner.
        </Paragraph>
        <Section>
          <Subheading>Error Boundaries</Subheading>
          <Paragraph>
            If imports or modules fail, they will trigger an error. Error
            boundaries can be implemented to improve the user experience and
            manage recoveries.
          </Paragraph>
          <Paragraph>
            Error boundaries exist so that, if part of your app crashes, it
            doesn't bring the entire house down with it. These error boundaries
            are React components which catch JavaScript errors anywhere in their
            child component tree. They don't catch errors for things in event
            handlers, async code, server side rendering, or errors actually in
            the error boundary itself.
          </Paragraph>
          <Paragraph>
            Unfortunately, these error boundaries must be class components to
            use lifecycle methods such as componentDidCatch(). But the child
            components can be functional. Below I have examples of class and
            functional components throwing errors.
          </Paragraph>
          <Paragraph>
            In then first example if either of these two buttons reach 5, both
            will cease to work and an error is thrown to the boundary.
          </Paragraph>
          <Boundary>
            <BuggedCounter />
            <BuggedCounter />
          </Boundary>
          <Paragraph>
            In the second example, each counter has its own boundary meaning
            they will crash independently.
          </Paragraph>
          <Boundary>
            <BuggedCounter />
          </Boundary>
          <Boundary>
            <BuggedCounter />
          </Boundary>
          <Paragraph>
            Error boundaries can be used with lazy loading components to display
            error messages to the user if one were to fail to load. This could
            be for reasons such as network errors.
          </Paragraph>
        </Section>
      </Section>
    </Main>
  )
}
