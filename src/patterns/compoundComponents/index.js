import React, {useState} from "react";

// Compound Component
const Toggle = ({children}) => {
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return React.Children.map(children, (child) => {
    // Clone child element and pass necessary props
    return React.cloneElement(child, {
      toggled: toggled,
      handleToggle: handleToggle
    });
  });
};

// Usage of the Toggle component
const ToggleButton = ({toggled, handleToggle}) => {
  return (
    <button onClick={handleToggle}>
      {toggled ? "ON" : "OFF"}
    </button>
  );
};

const ToggleText = ({toggled}) => {
  return (
    <p>
      The toggle is {toggled ? "ON" : "OFF"}.
    </p>
  );
};

const App = () => {
  return (
    <div>
      <p>Compound Components Pattern</p>
      <Toggle>
        <ToggleButton />
        <ToggleText />
      </Toggle>
    </div>
  );
};

export default App;

// Pros:

// Flexible and composable: Compound components allow for flexibility and composability, as they provide a way to encapsulate related components and their logic within a parent component.This makes it easy to create complex UI behaviors with a clear and structured API.

// Clear separation of concerns: Compound components enable a clear separation of concerns between the parent component and its children components.The parent component can handle the logic and manage the state, while the child components focus on rendering and receiving props from the parent.

// Improved reusability: By encapsulating related components within a parent component, compound components can be easily reused in different parts of an application, promoting code reuse and reducing duplication.

// Enforced component usage: Compound components can enforce a specific structure and usage pattern, as they define a clear API for their children components.This can help prevent misuse and provide better error handling and developer experience.

// Cons:

// Increased complexity: Compound components may introduce additional complexity, as they require careful management of props and state between the parent and children components.This can make the codebase harder to understand and maintain, especially for large and complex applications.

// Limited flexibility: The compound components pattern may not always be suitable for every use case, as it may restrict the flexibility of using components in different ways.Changing the structure or behavior of the compound components may require significant modifications to the parent and children components, leading to potential breaking changes.

// Learning curve: Compound components may require developers to learn and understand a new pattern and API for managing components, which can increase the learning curve for team members who are not familiar with the pattern.

// Prop drilling: While compound components provide a way to encapsulate related components, they may still require passing props down through multiple levels of component nesting(also known as "prop drilling") to reach the relevant child components.This can lead to additional boilerplate and make the code harder to maintain.

// Overall, the compound components pattern can be a powerful tool for managing related components and their behavior within a parent component, but it also comes with some trade - offs in terms of complexity, flexibility, and learning curve.It's important to carefully consider the specific requirements and constraints of your project before deciding to use the compound components pattern.





