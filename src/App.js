import React, { Component } from 'react';

import './App.css';

class Button extends Component {
  

  HandleClick  = () =>{
    this.props.onClickFunction(this.props.incrementValue);
  };

  render() {
   return (
     <div>
      <button onClick={this.HandleClick}>
        Click me to +{this.props.incrementValue}</button>
     </div>
   );
  }
}

const Result = (props) =>{
  return(
    <div>{props.counter}</div>
  )
}

class App extends React.Component{
  state = {counter : 0};

  incrementCount = (incrementValue) =>{
    this.setState((prevState) => ({
      counter : prevState.counter + incrementValue
  }));
  }

  render(){
    return(
      <div>
        <Button onClickFunction = {this.incrementCount} incrementValue={1}></Button>
        <Button onClickFunction = {this.incrementCount} incrementValue={5}></Button>
        <Button onClickFunction = {this.incrementCount} incrementValue={10}></Button>
        <Button onClickFunction = {this.incrementCount} incrementValue={100}></Button>
        <Result counter ={this.state.counter}></Result>
      </div>
    )
  }
}


//export default App;
export default App;
