// In order to solve the common issues that React developers can run into when using class components, React introduced React Hooks.React Hooks are functions that you can use to manage a components state and lifecycle methods.React Hooks make it possible to:
// 1. add state to a functional component
// 2. manage a component's lifecycle without having to use lifecycle methods such as componentDidMount and componentWillUnmount
// 3. reuse the same stateful logic among multiple components throughout the app

import React, {useState} from "react";

const ToggleComponent = () => {
  const [isToggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!isToggled);
  };

  return (
    <div>
      <button onClick={handleToggle}>
        {isToggled ? "Turn off" : "Turn on"}
      </button>
      {isToggled && <div>Toggle is on!</div>}
    </div>
  );
};

export default ToggleComponent;
