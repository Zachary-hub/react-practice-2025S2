import React from "react"

export default function Main() {
  // State to store ingredients list, starts empty
  const [ingredients, setIngredients] = React.useState([])

  // State to control whether the recipe is shown
  const [recipeShown, setRecipeShown] = React.useState(false)

  function toggleRecipeShown() {
    setRecipeShown(prevShown => !prevShown)
  }

  // Map over the ingredients array and render each item as a <li>
  const ingredientsListItems = ingredients.map(ingredient => (
    <li key={ingredient}>{ingredient}</li>
  ))

  // Handle form submission and add a new ingredient
  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient")
    if (newIngredient.trim() !== "") {
      setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }
  }

  return (
    <main>
      {/* Form to add a new ingredient */}
      <form action={addIngredient} className="add-ingredient-form">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>

      {/* Show the ingredients list only if there are any */}
      {ingredients.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul className="ingredients-list" aria-live="polite">
            {ingredientsListItems}
          </ul>

          {/* Show the "Get recipe" section only if more than 3 ingredients */}
          {ingredients.length > 3 && (
            <div className="get-recipe-container">
              <h3>Ready for a recipe?</h3>
              <p>Generate a recipe from your list of ingredients.</p>
              <button onClick={toggleRecipeShown}>
                {recipeShown ? "Hide recipe" : "Get a recipe"}
              </button>
            </div>
          )}
        </section>
      )}

      {/* Conditional rendering of recipe if recipeShown is true */}
      {recipeShown && (
        <article>
          <h2>Chef Claude Recommends:</h2>
          <p>
            Based on the ingredients you have available, I would recommend
            making a simple and delicious <strong>Beef Bolognese Pasta</strong>.
            Here is the recipe:
          </p>

          <h3>Beef Bolognese Pasta</h3>
          <strong>Ingredients:</strong>
          <ul>
            <li>1 lb. ground beef</li>
            <li>1 onion, diced</li>
            <li>3 cloves garlic, minced</li>
            <li>2 tablespoons tomato paste</li>
            <li>1 (28 oz) can crushed tomatoes</li>
            <li>1 cup beef broth</li>
            <li>1 teaspoon dried oregano</li>
            <li>1 teaspoon dried basil</li>
            <li>Salt and pepper to taste</li>
            <li>
              8 oz pasta of your choice (e.g., spaghetti, penne, or linguine)
            </li>
          </ul>

          <strong>Instructions:</strong>
          <ol>
            <li>Bring a large pot of salted water to a boil for the pasta.</li>
            <li>
              In a large skillet or Dutch oven, cook the ground beef over
              medium-high heat, breaking it up with a wooden spoon, until
              browned, about 5–7 minutes.
            </li>
            <li>
              Add the diced onion and minced garlic to the skillet. Cook for 3–4
              minutes, until the onion is translucent.
            </li>
            <li>Stir in the tomato paste and cook for 1 minute.</li>
            <li>
              Add the crushed tomatoes, beef broth, oregano, basil, salt, and
              pepper to taste.
            </li>
            <li>
              Reduce the heat to low and let the sauce simmer for 20–25 minutes,
              stirring occasionally, to allow the flavors to meld.
            </li>
            <li>
              While the sauce is simmering, cook the pasta according to the
              package instructions. Drain the pasta and return it to the pot.
            </li>
            <li>
              Add the Bolognese sauce to the cooked pasta and toss to combine.
            </li>
            <li>
              Serve hot, garnished with additional fresh basil or Parmesan
              cheese if desired.
            </li>
          </ol>
        </article>
      )}
    </main>
  )
}


