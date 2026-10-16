// Code 2

import React, { Component } from "react";

// Define an interface to specify the structure of the component's state.
interface CounterState {
  count: number; // The count property must be a number.
}

// Convert the class component to TypeScript by specifying its types.
// The first generic parameter represents props (none are required here).
// The second generic parameter defines the state structure.
class Counter extends Component<object, CounterState> {
  // Initialize the state and specify its type.
  state: CounterState = {
    count: 0,
  };

  // Increment the counter when the button is clicked.
  increment = () => {
    // Update the state by increasing the current count by one.
    this.setState({ count: this.state.count + 1 });
  };

  // Render the component's user interface.
  render() {
    return (
      <div>
        {/* Display the current counter value. */}
        <p>Count: {this.state.count}</p>

        {/* Call increment when the button is clicked. */}
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}

// Export the component so it can be imported into other files.
export default Counter;
