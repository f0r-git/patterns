// In React, one way to enforce separation of concerns is by using the Container / Presentational pattern.With this pattern, we can separate the view from the application logic.

// A presentational component receives its data through props. Its primary function is to simply display the data it receives the way we want them to, including styles, without modifying that data.

// Presentational components are usually stateless: they do not contain their own React state, unless they need a state for UI purposes. The data they receive, is not altered by the presentational components themselves.

// Presentational components receive their data from container components.

// The primary function of container components is to pass data to presentational components, which they contain. Container components themselves usually don't render any other components besides the presentational components that care about their data. Since they don't render anything themselves, they usually do not contain any styling either.

import React, { useState } from "react";
import ToggleButton from "./ToggleButton";

const ToggleButtonContainer = () => {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return <ToggleButton onToggle={handleToggle} isOn={isOn} />;
};

export default ToggleButtonContainer;

// The presentational/container pattern in React has several advantages and disadvantages:

// Pros:

// 1. Separation of concerns: The pattern separates the concerns of rendering UI (presentational component) and managing state and logic (container component) into two different components.

// 2. Reusability: The presentational component can be reused in other parts of the application, and the container component can be easily replaced with another container component that implements the same interface.

// 3. Testability: The presentational component can be easily tested in isolation, without having to worry about state or logic.

// 4. Improved readability: The separation of concerns and the use of descriptive component names can make the code more readable and easier to maintain.

// 5. Performance: The presentational component can be a pure functional component, which can improve performance by reducing unnecessary re-renders.

// Cons:

// 1. Increased complexity: The pattern adds an additional layer of complexity to the code, which can make it harder to understand for beginners.

// 2. More files: The pattern requires the creation of two separate files for each component, which can increase the number of files in the project and make it harder to navigate.

// 3. Indirection: The pattern adds an extra level of indirection between the state and the UI, which can make it harder to reason about the code.

// 4. Boilerplate code: The pattern requires the creation of additional code (e.g., the container component) that may seem boilerplate to some developers.

// 5. Overengineering: In some cases, the pattern may be overengineering for simple components or projects, and can add unnecessary complexity.

// Hooks
//In many cases, the Container/Presentational pattern can be replaced with React Hooks. The introduction of Hooks made it easy for developers to add statefulness without needing a container component to provide that state.
