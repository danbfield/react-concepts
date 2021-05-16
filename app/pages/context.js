import { useContext, useState } from 'react'
import { Heading, Main, Paragraph, Section, Subheading } from '../components'
import UserContext from '../helpers/UserContext'

function ComponentWithContext() {
  const user = useContext(UserContext)

  return <Paragraph>Hello, {user.name}</Paragraph>
}

export default function Context() {
  const [user, setUser] = useState({
    name: 'Jeff',
    hobby: 'Sleeping',
    age: '24',
  })

  return (
    <Main>
      <Heading>Context</Heading>
      <Section>
        <Subheading>Context</Subheading>
        <Paragraph>
          Instead of prop drilling we can use context. This is a method of
          passing down data through several components without the need to pass
          it down manually at each "level". There are quite a few libraries
          which try achieve the same thing, for example Redux and MobX. Examples
          of good use cases for Context would be global themes for styling, or a
          user object which will most likely be needed throughout an app.
        </Paragraph>
        <Paragraph>
          We can create a user object and pass that value into Context. Other
          components can get this user object easily by doing the following:
        </Paragraph>
        <Paragraph>{`const user = useContext(UserContext)`}</Paragraph>
        <Paragraph>{`return <Paragraph>Hello, {user.name}</Paragraph>`}</Paragraph>
        <UserContext.Provider value={user}>
          <ComponentWithContext />
        </UserContext.Provider>
        <Paragraph>
          Typically each "piece" of context would have its own provider. For
          example you'd have a UserContext and ThemeContext.
        </Paragraph>
      </Section>
    </Main>
  )
}
