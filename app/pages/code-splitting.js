import { useState } from 'react'
import {
  Button,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'
import { double } from '../helpers/Double'

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
      </Section>
    </Main>
  )
}
