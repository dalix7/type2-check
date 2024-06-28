// Import React and Component from 'react'
import React, { Component } from "react";

// Define interface for component state
interface CounterState {
  count: number; // State property count is a number
}

// Define Counter component as a class component extending Component
class Counter extends Component<{}, CounterState> {
  // Initialize state with count set to 0
  state: CounterState = {
    count: 0,
  };

  // Define increment method, updating count in state
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  // Render method returning JSX
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export Counter component as default export
export default Counter;
