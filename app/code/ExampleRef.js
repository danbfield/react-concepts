export default `import { useEffect, useRef, useState } from 'react'

export default function FocusedButton() {
  const [count, setCount] = useState(0)
  const buttonRef = useRef(null)

  useEffect(() => {
    // As this component is rendered, focus the button. Instead of clicking this button
    // here, I could just spam my "return" key, and it'd fire the event as well.
    buttonRef.current.focus()
  }, [])

  const handleClick = () => setCount(count + 1)

  return (
    <button onClick={handleClick} ref={buttonRef}>
        Current count: {count}
    </button>
  )
}
` 