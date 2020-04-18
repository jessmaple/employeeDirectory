import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/Jumbotron'
import Textbox from './component/Textbox'

function App() {
  return (
    <div className="App">
        <Jumbotron/>
        <Textbox/>
    </div>
  );
}

export default App;
