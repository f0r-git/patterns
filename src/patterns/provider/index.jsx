// In some cases, we want to make available data to many (if not all) components in an application.

// We often end up with something called prop drilling, which is the case when we pass props far down the component tree. Refactoring the code that relies on the props becomes almost impossible, and knowing where certain data comes from is difficult.

// It would be optimal of we could skip all the layers of components that don't need to use this data. We need to have something that gives the components that need access to the value of data direct access to it, without relying on prop drilling.

// This is where the Provider Pattern can help us out! With the Provider Pattern, we can make data available to multiple components. Rather than passing that data down each layer through props, we can wrap all components in a Provider.

// A Provider is a higher order component provided to us by the a Context object.We can create a Context object, using the createContext method that React provides for us.

// The Provider receives a value prop, which contains the data that we want to pass down. All components that are wrapped within this provider have access to the value of the value prop.

// Each component can get access to the data, by using the useContext hook. This hook receives the context that data has a reference with, DataContext  in this case. The useContext hook lets us read and write data to the context object.

import React, { createContext, useContext, useState } from "react";

// Create a context object for the toggle state
const ToggleContext = createContext();

// Define a custom hook to consume the toggle state
export const useToggle = () => {
  const { isToggled, toggle } = useContext(ToggleContext);
  return { isToggled, toggle };
};

// Define a toggle provider component
export const ToggleProvider = ({ children }) => {
  const [isToggled, setToggled] = useState(false);

  const toggle = () => setToggled(!isToggled);

  return (
    <ToggleContext.Provider value={{ isToggled, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
};

// Define a component that consumes the toggle state and provides a UI for toggling the state
export const Toggle = () => {
  const { isToggled, toggle } = useToggle();
  return <button onClick={toggle}>{isToggled ? "On" : "Off"}</button>;
};

// The Provider pattern is very useful for sharing global data. A common use case for the provider pattern is sharing a theme UI state with many components.
