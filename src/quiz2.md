1. What is a React component?

A React component is a reusable function that returns JSX to describe part of the UI.
It lets you break the UI into small, independent, and reusable pieces.
Example:
function Welcome() {
  return <h1>Hello, world!</h1>
}


2. What's wrong with this code?
function myComponent() {
  return (
    <small>I'm tiny text!</small>
  )
}

Issue:
Component names in React must start with a capital letter.
A lowercase name (myComponent) is treated as an HTML tag, not a component.

function MyComponent() {
  return (
    <small>I'm tiny text!</small>
  )
}

root.render(<MyComponent />)

3. What's wrong with this code?
function Header() {
  return (
    <header>
      <img src="./react-logo.png" width="40px" alt="React logo" />
    </header>
  )
}

root.render(Header())
Issues:
import reactLogo from "./react-logo.png"
Components must be rendered with <Header />, not Header().
In JSX, some HTML attributes follow different rules:
width="40px" 
Should be width={40}  or style={{ width: "40px" }} 

function Header() {
  return (
    <header>
      <img src={reactLogo} width={40} alt="React logo" />
    </header>
  )
}

root.render(<Header />)

