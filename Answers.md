# Answers

1.  What is React JS and what problems does it try and solve?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.  Without such a design system, complex, modern web apps would become very difficult to maintain, to update, to develop, and to keep performant. By putting the focus on creating reusable, composable components that are organized into a tree, React systematizes the development process, which makes developers more efficient and facilitates the creation of more complex applications.

1.  What does it mean to _think_ in react?

React makes you think about apps as many parts. First, you start with a mock and break up the UI into a component hierarchy.  Second, build a static version in react.  Third, identify the minimal (but complete) representaion of UI state.  Fourth, identify where your state should live.  Lastly fifth, add inverse date flow.

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A functional component is a regular pure JavaScript function that accepts props as its argument, and returns some JSX.

A class based component is a JavaScript class. It extends React.Component, and its only required method is render().  You are also able to use the property 'this.state' and this.setState.

1.  Describe state.

State is the component where the data comes from and is held.

1.  Describe props.

Props are similar to arguments for pure functions argument. Props of component are passed from parent component which invokes component. Props in a component cannot be modified(Immutable).