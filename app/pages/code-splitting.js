import {
  Heading,
  // Input,
  // Label,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
// import Link from 'next/link'

export default function CodeSplitting() {
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
    </Main>
  )
}
