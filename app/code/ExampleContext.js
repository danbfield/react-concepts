export default `import { useContext, useState } from 'react'

const UserContext = React.createContext({})

export const UserProvider = UserContext.Provider

const [user, setUser] = useState({
  name: 'Jeff',
  hobby: 'Sleeping',
  age: '24',
})

function ComponentWithContext() {
  const user = useContext(UserContext)
  return <p>Hello, {user.name}</p>
}

// render ...
<UserContext.Provider value={user}>
  <ComponentWithContext />
</UserContext.Provider>
`
