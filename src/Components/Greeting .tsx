// Import React with type definitions
import React from "react";

// Define an interface for the props
interface GreetingProps {
  name: string; // The name prop is a string
}

// Define the Greeting component using the defined props interface
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Return a JSX element that uses the name prop
  return <div>Hello, {name}!</div>;
};

// Export the component as the default export
export default Greeting;
