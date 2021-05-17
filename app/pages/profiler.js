import { useState, Profiler as ReactProfiler } from 'react'
import {
  Button,
  Heading,
  Main,
  Paragraph,
  Section,
  Subheading,
} from '../components'

export default function Profiler() {
  const [count, setCount] = useState(0)

  const items = [
    { name: 'Item 1' },
    { name: 'Item 2' },
    { name: 'Item 3' },
    { name: 'Item 4' },
    { name: 'Item 5' },
    { name: 'Item 6' },
    { name: 'Item 7' },
  ]

  const callback = (
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions
  ) => {
    console.log('Profiler: ', {
      id,
      phase,
      actualDuration,
      baseDuration,
      startTime,
      commitTime,
      interactions,
    })
  }

  return (
    <Main>
      <Heading>Profiler</Heading>
      <Section>
        <Subheading>Profiler</Subheading>
        <Paragraph>
          A Profiler is a React component which can be added anywhere in the
          React tree. These Profilers measure the cost of renderering that part
          of the tree, and it needs an ID and a callback function. React calls
          this callback each time the Profiler's tree updates. You can have
          multiple Profilers within the same component; which can use the same
          callback.
        </Paragraph>
        <Button changeHandler={() => setCount(count + 1)}>Re-render</Button>
        <ReactProfiler id='list' onRender={callback}>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        </ReactProfiler>
      </Section>
    </Main>
  )
}
