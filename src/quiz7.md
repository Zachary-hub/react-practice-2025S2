# React Side Effects Quiz

---

### 1. In what way are React components meant to be "pure functions"?
- Given the same props or state, the component will always return the same content or UI.  
- Rendering and re-rendering a component will never have any kind of side effect on an outside system.  

---

### 2. What is a "side effect" in React? What are some examples?
- Any code that affects or interacts with an outside system.  
- **Examples:** local storage, API calls, websockets, DOM manipulation.  

---

### 3. What is NOT a "side effect" in React? Examples?
- Pure rendering of UI based on props/state.  
- **Example:** Returning JSX, calculating values from props, or simple variable assignments.  

---

### 4. When does React run your `useEffect` function? When does it NOT run the effect function?
- React runs the effect after the component renders (committed to the DOM).  
- React does **not** run the effect if the dependencies haven’t changed (when using the dependency array).  

---

### 5. How would you explain what the "dependencies array" is?
- A list of values (variables, props, or state) that React tracks for changes.  
- If any value in the array changes, React re-runs the effect function.  
- If the array is empty (`[]`), the effect runs only once (on mount).  
