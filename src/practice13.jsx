import React from "react"
import pads from "./pads"

export default function App() {
  const [padsState, setPadsState] = React.useState(pads)

  /**
   * Challenge part 1:
   * 1. Initialize state with the default value of the array pulled in from pads.js
   * 2. Map over that state array and display each one as a <button>
   *    (CSS is already written for you)
   * (Don't worry about using the "on" or "color" properties yet)
   */

  const buttonElements = padsState.map(pad => (
    <button key={pad.id}>{pad.label}</button>
  ))

  return (
    <main>
      <div className="pad-container">
        {buttonElements}
      </div>
    </main>
  )
}
