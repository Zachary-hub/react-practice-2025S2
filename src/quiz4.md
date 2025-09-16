# Quiz: Understanding `.map()` in JavaScript and React

## 1. What does the `.map()` array method do?
The `.map()` method in JavaScript is used to **create a new array** by applying a function to each element of the original array.  
- It does **not** modify the original array.  
- Each element is transformed according to the callback function provided.  

**Example:**
```js
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

2. What do we usually use .map() for in React?

In React, .map() is commonly used to render lists of components dynamically from an array of data. Instead of writing repetitive JSX manually, we can map over an array and return a component for each item.

const fruits = ["Apple", "Banana", "Cherry"];

function FruitList() {
  return (
    <ul>
      {fruits.map((fruit, index) => (
        <li key={index}>{fruit}</li>
      ))}
    </ul>
  );
}

3. Critical thinking: why is using .map() better than just creating the components manually by typing them out?

Using .map() has several advantages:

Scalability – Works for arrays of any size without rewriting code.

Maintainability – Easier to update if data changes (just update the array, not JSX).

Dynamic rendering – Ideal for working with data fetched from APIs or databases.

Less repetition – Avoids writing repetitive code, making the component cleaner and more readable.

Typing out components manually is only feasible for very small, static datasets. For dynamic or large data, .map() is the efficient and professional approach.