import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  function signUp(event) {
    event.preventDefault(); 
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const email = formData.get("email");
    const password = formData.get("password");
    const description = formData.get("description");
    const employment = formData.get("employment");

    console.log("Email:", email);
    console.log("Password:", password);
    console.log("Description:", description);
    console.log("Employment:", employment);

    

    formEl.reset();
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp} method="post">
        {/* Email */}
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          defaultValue="joe@schmoe.com"
          type="email"
          name="email"
          required
        />
        <br />

        {/* Password */}
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          required
        />
        <br />

        {/* Description */}
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          placeholder="This is a description"
        />
        <br />

        {/* Employment Status */}
        <fieldset>
          <legend>Employment Status:</legend>
          <label>
            <input type="radio" name="employment" value="unemployed" required />
            Unemployed
          </label>
          <br />
          <label>
            <input type="radio" name="employment" value="part-time" />
            Part-time
          </label>
          <br />
          <label>
            <input type="radio" name="employment" value="full-time" />
            Full-time
          </label>
        </fieldset>

        <br />
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
