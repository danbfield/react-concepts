import { useState } from 'react'

const withInteractable =
  (WrappedComponent) =>
  ({ children }) => {
    const [count, setCount] = useState(0)

    const handleClick = () => {
      setCount(count + 1)
    }

    return (
      <>
        <span>Times clicked: {count}</span>
        <div style={{ cursor: 'pointer' }} onClick={handleClick}>
          <WrappedComponent>{children}</WrappedComponent>
        </div>
      </>
    )
  }

export default withInteractable
