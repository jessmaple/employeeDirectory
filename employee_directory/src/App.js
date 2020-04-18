import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/Jumbotron'
import Textbox from './component/Textbox'
import Table from './component/Table'


function App() {
  return (
    <div className="App">
        <Jumbotron/>
        <Textbox/>
        <br/>
        <Table/>
    </div>
  );
}

export default App;
