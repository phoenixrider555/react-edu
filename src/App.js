import React, {Component} from "react";
import './index.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
    };

    this.handleClick = this.handleClick.bind(this);
  }
 
  handleClick(number) {
   this.setState({count: this.state.count + number});
  };

  render () {
    return (
      <div className="App">
        Hello from React
        <div>
          <button class = "myButton" onClick={() => this.handleClick(-1)}> - </button>
          <span>{this.state.count}</span>
         <button class = "myButton" onClick={() => this.handleClick(1)}> + </button>
       </div>
      </div>
    );
  };
};
export default App;
