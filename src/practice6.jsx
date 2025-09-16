import React from "react"
import avatar from "./images/avatar.png" 

export default function App() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false
  })

  function toggleFavorite() {
    console.log("Toggle Favorite")
  
  }

  return (
    <main>
      <article className="card">
        <img
          src={avatar}
          className="avatar"
          alt={`User profile pic: ${contact.firstName} ${contact.lastName}`}
        />
        <h2>
          {contact.firstName} {contact.lastName}
        </h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>

        <button onClick={toggleFavorite}>
          {contact.isFavorite ? "★ Unfavorite" : "☆ Add to Favorites"}
        </button>
      </article>
    </main>
  )
}

