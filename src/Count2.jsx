import React from "react"

// Child component: receives "number" as a prop and displays it
export default function Count(props) {
  return <h2 className="count">{props.number}</h2>
}
