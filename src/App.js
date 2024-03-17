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
      render () {
        return (
          <div>
            ('.minus').click(function) () {
            let input = (this).parent().parent().find('input');
            let count = parseInt(input.val()) - 1;
            count = count < 1 ? 1 : count;
            input.val(count);
            input.change();
            return false;
           };
            ('.plus').click(function) () {
            let input = $(this).parent().parent().find('input');
            input.val(parseInt(input.val()) + 1);
            input.change();
            return false;
           };
          </div>
        );
      };
};
export default App;
