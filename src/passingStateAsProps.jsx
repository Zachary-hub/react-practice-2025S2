import React from "react"
import Count from "./Count2"   // Import the child component

export default function App() {
  const [count, setCount] = React.useState(0)

  function add() {
    setCount(prevCount => prevCount + 1)
  }

  function subtract() {
    setCount(prevCount => prevCount - 1)
  }

  return (
    <main className="container">
      <div className="counter">
        <button onClick={subtract}>-</button>

        {/* Use Count component instead of <h2> */}
        <Count number={count} />

        <button onClick={add}>+</button>
      </div>
    </main>
  )
}
