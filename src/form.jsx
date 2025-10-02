import React from "react"
import ReactDOM from "react-dom/client"

function App() {
    return (
        <section>
            <h1>Signup form</h1>
            <form>
                <label htmlFor="email">Email:</label>
                <input 
                    id="email" 
                    type="email" 
                    name="email" 
                    placeholder="joe@schmoe.com" 
                    defaultValue="joe@schmoe.com"
                />
                <br />

                <label htmlFor="password">Password:</label>
                <input 
                    id="password" 
                    defaultValue="password123" 
                    type="password" 
                    name="password" 
                />
                <br />

                <label htmlFor="description">Description:</label>
                <textarea 
                    id="description" 
                    name="description" 
                    defaultValue="This is a description"
                ></textarea>
                <br />

                <fieldset>
                    <legend>Employment Status:</legend>
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            value="unemployed" 
                        />
                        Unemployed
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            value="part-time" 
                        />
                        Part-time
                    </label>
                    <label>
                        <input 
                            type="radio" 
                            name="employmentStatus" 
                            value="full-time" 
                            defaultChecked={true}
                        />
                        Full-time
                    </label>
                </fieldset>
                <br />

                <fieldset>
                    <legend>Dietary restrictions:</legend>
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            value="kosher" 
                        />
                        Kosher
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            value="vegan" 
                        />
                        Vegan
                    </label>
                    <label>
                        <input 
                            type="checkbox" 
                            name="dietaryRestrictions" 
                            defaultChecked={true}
                            value="gluten-free" 
                        />
                        Gluten-free
                    </label>
                </fieldset>
                <br />

                <label htmlFor="favColor">What is your favorite color?</label>
                <select 
                    id="favColor" 
                    name="favColor" 
                    defaultValue="" 
                    required
                >
                    <option value="" disabled>-- Choose a color --</option>
                    <option value="red">Red</option>
                    <option value="orange">Orange</option>
                    <option value="yellow">Yellow</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="indigo">Indigo</option>
                    <option value="violet">Violet</option>
                </select>
                <br />

                <button>Submit</button>
            </form>
        </section>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />)

