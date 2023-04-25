import React from "react";

const ToggleButton = ({ onToggle, isOn }) => {
  return <button onClick={onToggle}>{isOn ? "Turn off" : "Turn on"}</button>;
};

export default ToggleButton;
