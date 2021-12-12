import { useEffect, useRef, useState } from 'react'

export default function FocusedButton() {
  const [count, setCount] = useState(0)
  const buttonRef = useRef(null)

  useEffect(() => {
    if (window.innerWidth > 768) {
      // As this component is rendered, focus the button. Instead of clicking this button
      // here, I could just spam my "return" key, and it'd fire the event as well. We don't
      // want to focus the button on mobile devices though since it would scroll the users
      // position further down the page than they would expect.
      buttonRef.current.focus()
    }
  }, [])

  const handleClick = () => setCount(count + 1)

  return (
    <button onClick={handleClick} ref={buttonRef}>
      Current count: {count}
    </button>
  )
}
