import React from "react"

export default function App() {
  const [myFavoriteThings, setMyFavoriteThings] = React.useState([])

  const allFavoriteThings = ["💎", "🐱", "🍦", "✌️", "🔥🌴", "🏀🎁", "🙈", "🍅🍎", "🔔", "🎷", "🍕👟"]

  const thingsElements = myFavoriteThings.map(thing => <p key={thing}>{thing}</p>)

  function addFavoriteThing() {
    setMyFavoriteThings(
      prevFavThings => [
        ...prevFavThings,
        allFavoriteThings[prevFavThings.length]
      ]
    )
  }

  return (
    <main>
      <button onClick={addFavoriteThing}>Add item</button>
      <section aria-live="polite">
        {thingsElements}
      </section>
    </main>
  )
}
