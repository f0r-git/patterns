// A render prop is a prop on a component, which value is a function that returns a JSX element. The component itself does not render anything besides the render prop. Instead, the component simply calls the render prop, instead of implementing its own rendering logic.

import Toggle from "./Toggle"

const RenderProps = () => {
  return <Toggle>
    {({ on, toggle }) => (
      <div>
        {on ? "ON" : "OFF"}
        <button onClick={toggle}>Toggle</button>
      </div>
    )}
  </Toggle>
}

export default RenderProps;