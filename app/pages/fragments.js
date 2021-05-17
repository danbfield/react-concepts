import { Heading, Main, Paragraph, Section, Subheading } from '../components'

export default function Fragments() {
  return (
    <Main>
      <Heading>Fragments</Heading>
      <Section>
        <Subheading>Fragments</Subheading>
        <Paragraph>
          A lot of components return multiple elements, but React needs one
          "parent" element returned. It was quite common to wrap elements within
          a div. Fragments allow you to do this without adding extra nodes to
          the DOM; which is a really good thing.
        </Paragraph>
        <Paragraph>
          There's basically two reasons why you'd use Fragmments; it's a tiny
          bit faster and uses less memory because React isn't creating an extra
          node and the DOM inspector is less cluttered with unnecessary divs.
        </Paragraph>
      </Section>
    </Main>
  )
}
