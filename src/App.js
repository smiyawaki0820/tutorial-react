import React, { Component } from 'react';
// import React from 'react';
// import ReactDOM from 'react-dom';

import './App.css';


/*
const componentStyle = {
    background: '#fcc',
    margin: '5px',
    padding: '5px',
    borderRadius: '5px'
};


// コンポーネント
function Welcome(props) {
    return <h1 style={ componentStyle }>Hello, { props.name }</h1>;
}

// コンポーネント
function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


// レンダリング
class Hello extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      power: true
    };
  }

  handleClick() {
    this.setState({
      power: !this.state.power
    });
    alert(`button click: ${this.state.power}`);
  }

  render() {
    return (
      <div>
        <App />
        <button onClick={this.handleClick}>BUTTON</button>
      </div>
    );
  }
}

function Timer() {
  const element = (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
  );
  ReactDOM.render(
        element,
        document.getElementById('root')
  );
}

//export default Hello;
export default setInterval(Timer, 1000);
*/


class MyClass extends Component {
  constructor(props) {
    super(props);
    this.clickButton = this.clickButton.bind(this);
    this.state = {
      counter: 0
    };
  }
        
  clickButton() {
    this.setState({
      counter: this.state.counter+1
    });
    alert(`counter: ${this.state.counter}`);
  }
          
  render() {
    return (
      <div>
        <button onClick={this.clickButton}>increment</button>
      </div>
    );
  }
}

export default MyClass;
