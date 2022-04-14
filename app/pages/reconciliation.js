import { useState } from 'react'
import {
  Button,
  CodeSnippit,
  Heading,
  Link,
  Main,
  Paragraph,
  Section,
  Subheading,
} from 'components'

function ParentA({ count, children }) {
  return (
    <div className="mb-4">
      <span className="block mb-4">Parent Component Count: {count}</span>
      {children}
    </div>
  )
}

function ParentB({ count, children }) {
  return (
    <div className="mb-4">
      <div className="mb-4">Parent Component Count: {count}</div>
      {children}
    </div>
  )
}

function Child({ text }) {
  const [count, setCount] = useState(0)

  return (
    <div className="mb-4">
      <p className="mb-4">Child Component Count: {count}</p>
      <p className="mb-4">{text}</p>
      <Button changeHandler={() => setCount(count + 1)}>
        Increase Child Count
      </Button>
    </div>
  )
}

export default function Reconciliation() {
  // Example A (Different Types)
  const [countA, setCountA] = useState(0)
  const [toggleA, setToggleA] = useState(false)
  const handleExampleACount = () => setCountA(countA + 1)
  const handleExampleAToggle = () => setToggleA(!toggleA)

  // Example B (Identical Types)
  const [countB, setCountB] = useState(0)
  const [toggleB, setToggleB] = useState(false)
  const handleExampleBCount = () => setCountB(countB + 1)
  const handleExampleBToggle = () => setToggleB(!toggleB)

  // Example C (Recursion)
  const [visibleC, setVisibleC] = useState(false)
  const handleExampleC = () => setVisibleC(true)

  // Example D (Recursion)
  const [visibleD, setVisibleD] = useState(false)
  const handleExampleD = () => setVisibleD(true)

  return (
    <Main>
      <Heading>Reconciliation</Heading>
      <Section>
        <Subheading>Introduction</Subheading>
        <Paragraph>
          React's Render function returns a tree of React elements as state or
          props change. But render can return a different tree of elements.
          React needs to figure out how to update the tree in the most efficient
          way.
        </Paragraph>
        <Paragraph>
          React's algorithm for working out the tree diffs is{' '}
          <Link href="https://stackoverflow.com/a/1909388">O(n)</Link>, and it
          assumes only two things; Elements created of different types will
          produce a new tree; Developers can "hint" at which elements are stable
          across renders using the "key" property on things like lists.
        </Paragraph>
        <Paragraph>
          The O(n) algorithm implemented by React first compares the two root
          elements. The behaviour is different depending on if these elements
          are of the same type, or not.
        </Paragraph>
      </Section>
      <Section>
        <Subheading>Elements of different types</Subheading>
        <Paragraph>
          If the elements are different, for example rendering an{' '}
          <CodeSnippit code="img" displayInline /> to{' '}
          <CodeSnippit code="div" displayInline />, React will tear down the
          tree and build up the new one from nothing. While React tears down a
          root, it also destroys the children too; including their{' '}
          <CodeSnippit code="state" displayInline />. For example the only
          difference below for the parent count display is, one is rendered with
          a div, and the other span; two seperate components of course, clicking
          the toggle will tear down the childs state.
        </Paragraph>
        {!toggleA ? (
          <ParentA count={countA} className="exampleA">
            <Child />
          </ParentA>
        ) : (
          <ParentB count={countA} className="exampleB">
            <Child />
          </ParentB>
        )}
        <Button changeHandler={handleExampleACount}>
          Increase Parent Count
        </Button>
        <Button changeHandler={handleExampleAToggle}>Toggle Component</Button>
      </Section>
      <Section>
        <Subheading>Elements of the same type</Subheading>
        <Paragraph>
          If the elements are the same, when React compares them, React will
          adjust the attributes and keep the same DOM node. For example changing{' '}
          <CodeSnippit code="className" displayInline /> or{' '}
          <CodeSnippit code="required" displayInline /> on an input field; the
          node itself will remain with its state. For example below, the only
          thing which changes when we toggle between these components is the{' '}
          <CodeSnippit code="className" displayInline />, which means the DOM
          nodes themselves aren't affected and children aren't torn down nor is
          the root. The <CodeSnippit code="state" displayInline /> is
          unaffected.
        </Paragraph>
        {!toggleB ? (
          <ParentA count={countB} className="parentA">
            <Child />
          </ParentA>
        ) : (
          <ParentA count={countB} className="parentB">
            <Child />
          </ParentA>
        )}
        <Button changeHandler={handleExampleBCount}>
          Increase Parent Count
        </Button>
        <Button changeHandler={handleExampleBToggle}>Toggle Component</Button>
      </Section>
      <Section>
        <Subheading>Recursion</Subheading>
        <Paragraph>
          Adding to lists is one cool example of how React works, adding to the
          bottom works great because it sees there is a difference in one of the
          last DOM nodes; and makes a quick addition.
        </Paragraph>
        {/* Example */}
        <Button changeHandler={handleExampleC}>Add to bottom of list</Button>
        <ul className="pt-4">
          <li className="mb-2">One</li>
          <li className="mb-2">Two</li>
          {visibleC && <li className="mb-2">Three</li>}
        </ul>
        <Paragraph>
          The problem is though, in React, if you add to the front, or the
          middle, React can work overtime because it doesn't realize it can keep
          the two of the elements, and it will mutate every child of the
          unordered list. This can be solved with lists and mapped things
          though, with the "key" attribute, which is why you always see it in
          console when it isn't included. This is because it helps React track
          which nodes need updating and which don't from the original tree.
          React knows which element is the new addiction if this were the case.
        </Paragraph>
        <Button changeHandler={handleExampleD}>Add to middle of list</Button>
        <ul className="pt-4">
          <li className="mb-2">One</li>
          {visibleD && <li className="mb-2">Three</li>}
          <li className="mb-2">Two</li>
        </ul>
      </Section>
    </Main>
  )
}
