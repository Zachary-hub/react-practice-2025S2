import ReactDOM from 'react-dom/client';

function App() {
  const hours = new Date().getHours()
  let timeOfDay

  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 14) {
    timeOfDay = "afternoon"
  } else if (hours < 21) {
    timeOfDay = "evening"
  } else {
    timeOfDay = "night"
  }

  /**
   * Challenge: change the hard-coded "night" to display the
   * text we determined from the logic above.
   */

  return (
    <h1>Good {timeOfDay}</h1>
  )
}
