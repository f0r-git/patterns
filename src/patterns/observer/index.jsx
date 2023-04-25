// With the observer pattern, we can subscribe certain objects, the observers, to another object, called the observable. Whenever an event occurs, the observable notifies all its observers!

import { ToastContainer, toast } from "react-toastify";
import observable from "./observable";
import { useEffect } from "react";

// An observable object usually contains 3 important parts:
// 1. observers: an array of observers that will get notified whenever a specific event occurs.
// 2. subscribe(): a method in order to add observers to the observers list.
// 3. unsubscribe(): a method in order to remove observers from the observers list.
// 4. notify(): a method to notify all observers whenever a specific event occurs.

const handleClick = () => observable.notify("User clicked button!");

const logger = (data) => {
  console.log(`${Date.now()} ${data}}`);
};

const toastify = (data) => {
  toast(data, {
    position: "bottom-right",
    closeButton: false,
    autoClose: 2000,
  });
};

const Index = () => {
  useEffect(() => {
    observable.subscribe(logger);
    observable.subscribe(toastify);
    return () => {
      observable.unsubscribe(logger);
      observable.unsubscribe(toastify);
    };
  }, []);
  return (
    <div>
      <button onClick={handleClick}>Click me!</button>
      <ToastContainer />
    </div>
  );
};

export default Index;

// Pros:

// 1. Simplifies communication between components: Using the observable pattern, components can communicate with each other without the need for a parent component to pass down props to its children.

// 2. Reduces coupling: The observable pattern decouples components and promotes a more modular code structure.Components only need to be concerned with subscribing to the observable and updating their state when notified of changes.

// 3. Improves performance: The observable pattern can improve performance by reducing the number of unnecessary re - renders that can occur when passing down props through multiple levels of components.

// 4. Scalability: The observable pattern can be used to create a scalable architecture that is easy to extend and maintain as the application grows.

// Cons:

// 1. Complexity: Implementing the observable pattern can introduce additional complexity to the codebase, making it harder to understand and maintain.

// 2. Learning curve: Developers need to understand the observable pattern and how it works in order to use it effectively.

// 3. Additional setup: Implementing the observable pattern may require additional setup, such as creating a new context, creating observables, and subscribing to changes.This can add extra code that needs to be written and maintained.

// 4. Overuse: The observable pattern can be overused, leading to overly complicated code that is hard to maintain.It is important to use it judiciously and only where it is necessary.
