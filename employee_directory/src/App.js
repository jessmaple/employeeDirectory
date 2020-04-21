import React from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/Jumbotron'
import Textbox from './component/Textbox'
import Table from './component/Table'
import EmployeeContext from './utils/EmployeeContext'

function App() {
  return (
    <EmployeeContext.provider >
        <Jumbotron/>
        <Textbox/>
        <br/>
        <Table/>
    </EmployeeContext.provider>
  );
}

export default App;
