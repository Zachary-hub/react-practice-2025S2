import React from "react"

export default function Main() {
  const [ingredients, setIngredients] = React.useState([])

  function addIngredient(event) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const newIngredient = formData.get("ingredient").trim()

    if (newIngredient) {
      setIngredients(prevIngredients => [
        ...prevIngredients,
        newIngredient
      ])
    }

    event.currentTarget.reset()
  }

  const ingredientsListItems = ingredients.map((item, index) => (
    <li key={index}>{item}</li>
  ))

  return (
    <main>
      <form onSubmit={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {/* 如果有食材则显示 */}
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>
        </section>
      )}

      {/* 挑战：仅当 ingredients >= 3 时才显示配方按钮 */}
      {ingredients.length >= 3 && (
        <div className="get-recipe-container">
          <h3>Ready for a recipe?</h3>
          <p>Generate a recipe from your list of ingredients.</p>
          <button className="get-recipe-btn">Get a recipe</button>
        </div>
      )}
    </main>
  )
}
