// Within our application, we often want to use the same logic in multiple components.This logic can include applying a certain styling to components, requiring authorization, or adding a global state.

import withToggle from "./withToggle";

// One way of being able to reuse the same logic in multiple components, is by using the higher order component pattern.This pattern allows us to reuse component logic throughout our application.

// A Higher Order Component(HOC) is a component that receives another component.The HOC contains certain logic that we want to apply to the component that we pass as a parameter.After applying that logic, the HOC returns the element with the additional logic.

// Usage of the toggle HOC
const MyComponent = ({toggled, handleToggle}) => {
  return (
    <div>
      <button onClick={handleToggle}>
        {toggled ? "ON" : "OFF"}
      </button>
      <p>
        The toggle is {toggled ? "ON" : "OFF"}.
      </p>
    </div>
  );
};

// Wrap MyComponent with the toggle HOC
const MyComponentWithToggle = withToggle(MyComponent);

export default MyComponentWithToggle;

// Pros
// Using the Higher Order Component pattern allows us to keep logic that we want to re - use all in one place.This reduces the risk of accidentally spreading bugs throughout the application by duplicating code over and over, potentially introducing new bugs each time.By keeping the logic all in one place, we can keep our code DRY and easily enforce separation of concerns.

// Cons
// The name of the prop that a HOC can pass to an element, can cause a naming collision.
// When using multiple composed HOCs that all pass props to the element that's wrapped within them, it can be difficult to figure out which HOC is responsible for which prop. This can hinder debugging and scaling an application easily.