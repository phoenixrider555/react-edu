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
  
 
  handleClick() {
   this.setState({count: this.state.count + 1});
  };

  render () {
    return (
      <div className="App">
      Hello from React
        <div>
        <button class = "myButton" onClick={this.handleClick}> - </button>
        <span>{this.state.count}</span>
        <button class = "myButton" onClick={this.handleClick}> + </button>
       </div>
      </div>
    );
  };
};
export default App;
