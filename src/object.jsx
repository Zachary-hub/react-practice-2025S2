let starIcon = contact.isFavorite ? starFilled : starEmpty

function toggleFavorite() {
  console.log("Toggle Favorite")
}

return (
  <main>
    <article className="card">
      <img 
        src={avatar} 
        className="avatar" 
        alt="User profile picture of John Doe" 
      />
      <div className="info">
        <button
          onClick={toggleFavorite}
          aria-pressed={contact.isFavorite}
          aria-label={contact.isFavorite ? "Remove from favorites" : "Add to favorites"}
          className="favorite-button"
        >
          <img 
            src={starIcon} 
            alt={contact.isFavorite ? "filled star icon" : "empty star icon"} 
            className="favorite" 
          />
        </button>
        <h2>John Doe</h2>
        <p>+1 (212) 555-1212</p>
        <p>itsmyrealname@example.com</p>
      </div>
    </article>
  </main>
)
