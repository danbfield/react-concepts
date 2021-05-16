import React, { useState } from 'react'

export default function BuggedCounter() {
  const [counter, setCounter] = useState(0)

  if (counter === 5) throw new Error('Unfortunate')

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Clicked: {counter} times!
    </button>
  )
}
