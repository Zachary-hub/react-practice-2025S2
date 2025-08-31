# React Props Q&A

## 1. What do props help us accomplish?
Props help us **pass data from a parent component to a child component**, making components **reusable** and **dynamic**.

---

## 2. How do you pass a prop into a component?
You pass props just like HTML attributes when calling the component:

```jsx
<Navbar title="My Website" />
Here, title="My Website" is a prop

3. Can I pass a custom prop (e.g. blahblahblah={true}) to a native DOM element (e.g. <div blahblahblah={true}>)? Why or why not?

❌ No.
Native DOM elements (like <div>, <p>) only accept standard HTML attributes (id, className, style, onClick, etc.).
Custom props only work on custom React components, not on built-in DOM elements.

4. How do I receive props in a component?

You receive props as a function parameter:

function Navbar(props) {
  return <h1>{props.title}</h1>
}


Or use destructuring for cleaner code:

function Navbar({ title }) {
  return <h1>{title}</h1>
}

5. What data type is props when the component receives it?

props is always an object.
Each prop is a property on that object.

Example:

<Navbar title="My Site" theme="dark" />


Inside the component:

props = { title: "My Site", theme: "dark" }