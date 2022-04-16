import logo from './logo.svg';

import React from 'react';
// import ReactDOM from 'react-dom';

import './App.css';

/*
const vegetables = [ 
  '大根', '玉ねぎ', 'キャベツ', '白菜', '人参', 'トマト',
    'きゅうり', 'かぼちゃ', 'レタス', 'もやし', 'ねぎ',
];

class Wordlist extends React.Component {

  onWordSelected(e) {
    console.log(e.target.innerText);
  }

  render() {
    return (
      <div className="wordfont">
        {
          vegetables.map(
            word => 
            <span key={word} onClick={this.onWordSelected}>{word}</span>
          )  
        }
      </div>
    );
  }

}

export default Wordlist
*/

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          hogehoge
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
