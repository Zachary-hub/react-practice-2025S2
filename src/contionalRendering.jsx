import React from "react"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    function toggleShown() {
        setIsShown(prevShown => !prevShown)
    }

    return (
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={toggleShown}>
                {isShown ? "Hide" : "Show"} punchline
            </button>
            <hr />
        </div>
    )
}


console.log(false && true)   // false
console.log(true && false)   // false
console.log(true && true)    // true
console.log(false && false)  // false

import React from "react"

export default function App() {
    const [unreadMessages, setUnreadMessages] = React.useState(["a", "b"])

    /**
     * Challenge:
     * If there are 0 unread messages, display a paragraph that says 
     * "You have no unread messages".
     * (So, the logic will be the opposite of what we have for the h1)
     */

    return (
        <div>
            {
                unreadMessages.length > 0 && 
                <h1>You have {unreadMessages.length} unread messages!</h1>
            }
            {
                unreadMessages.length === 0 &&
                <p>You have no unread messages</p>
            }
        </div>
    )
}

