import React, { useState } from 'react'

export default function BuggedCounter() {
  const [counter, setCounter] = useState(0)

  if (counter === 5)
    throw new Error(
      'Unfortunate, but intentional. You cannot use this counter now, sorry!'
    )

  return (
    <button onClick={() => setCounter(counter + 1)}>
      Clicked: {counter} times!
    </button>
  )
}
