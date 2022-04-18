import React from 'react';
import ReactDOM from 'react-dom';

import './App.css';


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
function Render() {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
}


// main
export default Render;


