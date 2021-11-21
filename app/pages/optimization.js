import {
  Heading,
  Link,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function Optimization() {
  return (
    <Main>
      <Heading>Optimization</Heading>
      <Section>
        <Subheading>Optimizing React</Subheading>
        <Paragraph>
          The best way to improve the performance of React is to use the
          production builds, this is pretty straight forward; for example when
          using create-react-app, run npm build, and you have a build/ directory
          made for you. There's also a bunch of useful production build helpers
          such as Brunch, Browserify, Rollup and Webpack (which create-react-app
          uses).
        </Paragraph>
        <Paragraph>
          Since React builds and maintains a representation of the UI,
          internally. React can be pretty smart about what is created for the
          DOM and avoiding adding nodes excessively (more than needed). As
          components have their props, and state, changed, React works out
          whether the DOM needs updating. Re-rendering can sometimes be rather
          complex and therefore slow, but there is some lifecycle methods which
          can improve this such as{' '}
          <Link href="https://reactjs.org/docs/optimizing-performance.html#avoid-reconciliation">
            shouldComponentUpdate
          </Link>
          . Lifecycle methods can't be used with functional components though,
          which is the direction React has been going as of late.
        </Paragraph>
        <Paragraph>
          It's worth noting that functional stateless components do not have
          lifecycle methods. Thus, we cannot actually optimize them using
          shouldComponentUpdate. Functional components are much simpler and cost
          less bytes than class components. You can use{' '}
          <Link href="https://reactjs.org/docs/react-api.html#reactmemo">
            React.memo
          </Link>{' '}
          which is a higher-order component that skips re-rendering of the
          component if the component renders the same result given the same
          props.
        </Paragraph>
      </Section>
    </Main>
  )
}
