# React Basics Q&A

## 1. Where does React put all of the elements I create in JSX when I call `root.render()`?
All elements are rendered inside the `<div>` with `id="root"` in `public/index.html` (or another container specified in `createRoot`).

---

## 2. What would show up in my console if I were to run this line of code?
```jsx
console.log(<h1>Hello world!</h1>)

It logs a React element object, not HTML. Example:
{ type: "h1", props: { children: "Hello world!" }, ... }

## 3. What's wrong with this code?
root.render(
  <h1>Hi there</h1>
  <p>This is my website!</p>
)
Error: JSX must have a single root element.
Correct:
root.render(
  <>
    <h1>Hi there</h1>
    <p>This is my website!</p>
  </>
)


4. What does it mean for something to be "declarative" instead of "imperative"?

Imperative: Describes step-by-step instructions (manipulating the DOM manually).

Declarative: Describes the desired outcome, React handles the updates automatically.

5. What does it mean for something to be "composable"?

Composable means components can be combined like building blocks.

Small components can work independently

They can be assembled into larger components

Increases reusability, maintainability, and scalability

Example:
function Header() { return <h1>Welcome</h1> }
function Content() { return <p>Hello World!</p> }
function Page() {
  return (
    <div>
      <Header />
      <Content />
    </div>
  )
}
