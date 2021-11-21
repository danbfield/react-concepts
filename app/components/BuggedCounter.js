import React, { useState } from 'react'

export default function BuggedCounter() {
  const [counter, setCounter] = useState(0)

  if (counter === 5)
    throw new Error(
      'Unfortunate, but intentional. You cannot use this counter now, sorry!'
    )

  return (
    <button
      className="bg-blue-500 hover:bg-blue-400 text-white py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded mr-2"
      onClick={() => setCounter(counter + 1)}
    >
      Clicked: {counter} times!
    </button>
  )
}
