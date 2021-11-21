import { InteractableLink, Paragraph, Main, Heading } from '../components'

export default function Home() {
  return (
    <Main>
      <Heading>React Concepts</Heading>
      <Paragraph>
        Hello, I'm covering the advanced React concepts to understand them. Most
        of these will have examples which can be played around with.
      </Paragraph>
      <Paragraph>
        An app made by{' '}
        <InteractableLink href="https://github.com/danielbutterfield">
          Dan
        </InteractableLink>{' '}
        with NextJS.
      </Paragraph>
    </Main>
  )
}
