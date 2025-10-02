import React from "react"

// Define the main App component
export default function App() {
  // React state: 'messages' holds an array of messages, and 'setMessages' updates it
  const [messages, setMessages] = React.useState(["a", "b"])

  /**
   * Function: determineText
   * - Returns a different string depending on the number of unread messages
   *   - If there are 0 messages -> "You're all caught up!"
   *   - If there is exactly 1 message -> "You have 1 unread message"
   *   - If there are more than 1 -> "You have <n> unread messages"
   */
  function determineText() {
    if (messages.length === 0) {
      return "You're all caught up!"
    } else if (messages.length === 1) {
      return "You have 1 unread message"
    } else {
      return `You have ${messages.length} unread messages`
    }
  }

  // JSX returned by the App component
  return (
    <div>
      {/* Call determineText() inside JSX to show the correct message */}
      <h1>{determineText()}</h1>
    </div>
  )
}
