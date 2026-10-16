//Code 01 :

// Import React to use react related functionality
import React from "react";

// Define an interface to secify the props that Greeting accepts
interface GreetingProps {
  name: string; // The name prop must be a string
}

//Create a functional component and specify its props type

const Greeting = ({ name }: GreetingProps) => {
  // Display a greeting using the name received through props
  return <div>Hello, {name}!</div>;
};

// Export the component so it can be imported into other files
export default Greeting;
