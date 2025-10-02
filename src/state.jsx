//React won't re-render the component.

//So the UI won't update, and the button will still display "Yes."


export default function state() {
  let state = "Yes"

  function handleClick() {
    state = "Heck yes"
  }

  return (
    <main>
      <h1 className="title">Is state important to know?</h1>
      <button onClick={handleClick} className="value">{state}</button>
    </main>
  )
}

//To fix this, we need to use the useState hook.

import { useState } from "react"

export default function state(){
    const [state, setState] = useState('Yes')

    function handleClick(){
        setState("Heck yes")
    }


    return(
        <main>

        <h1 className="title">Is this important to know?</h1>
        <button onClick={handleClick} className="value">{state}</button>

        </main>
    )



}
