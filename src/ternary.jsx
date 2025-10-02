export default function App() {
  /**
   * Challenge: Replace the if/else below with a ternary
   * to determine the text that should display on the page
   */
  const isGoingOut = true

  let answer = isGoingOut ? "Yes" : "No"

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{answer}</button>
    </main>
  )
}

export default function App() {
  const isGoingOut = true

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value">{isGoingOut ? "Yes" : "No"}</button>
    </main>
  )
}

// toggling

export default function App() {

  const [isGoingOut, setIsGoingOut] = React.useState(true)
  function toggleIsGoingOut() {
    setIsGoingOut(prevState => !prevState)
  }

  return (
    <main>
      <h1 className="title">Do I feel like going out tonight?</h1>
      <button className="value" onClick={toggleIsGoingOut}>
        {isGoingOut ? "Yes" : "No"}
      </button>
    </main>
  )
}

