import React from 'react';
import ReactDOM from 'react-dom/client';

function App() {
  function signUp(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl); 

    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email:", email);
    console.log("Password:", password);

    // TODO: 在这里提交到后端 API
    // fetch("/signup", { method: "POST", body: formData });

    formEl.reset(); 
  }

  return (
    <section>
      <h1>Signup form</h1>
      <form onSubmit={signUp} method="post">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="joe@schmoe.com"
          required
        />
        <br />

        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          name="password"
          required
        />
        <br />

        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
