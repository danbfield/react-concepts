import { useState } from 'react'
import {
  Heading,
  Link,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

function RenderAnything({ render }) {
  const [data, setData] = useState({
    text: `This a component which returns a render function. It is just a regular 
      paragraph though, except it has state, which has this text.`,
  })

  return render(data)
}

export default function RenderProps() {
  return (
    <Main>
      <Heading>Render Props</Heading>
      <Section>
        <Subheading>But which component do I render?</Subheading>
        <Paragraph>
          Render props is quite a neat trick we use to allow a component to
          render different things dynamically without changing its
          implementation. It doesn't actually need to be "render" here, it could
          be literally name for the prop, it just makes sense to use render.
          There's other neat tricks too, such as using this method to create
          HOCs, or instead of using "render", use "children" which means it
          doesn't need to be specified as a prop in the component. See{' '}
          <Link href="https://reactjs.org/docs/render-props.html">here</Link>{' '}
          for more examples.
        </Paragraph>
        <RenderAnything
          render={(data) => <Paragraph>{data && data.text}</Paragraph>}
        />
        <RenderAnything
          render={(data) => <Subheading>{data && data.text}</Subheading>}
        />
      </Section>
    </Main>
  )
}
