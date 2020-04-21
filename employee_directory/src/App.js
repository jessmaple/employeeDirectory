import React ,{useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Jumbotron from './component/Jumbotron'
import Textbox from './component/Textbox'
import Table from './component/Table'
import EmployeeContext from './utils/EmployeeContext'

import API from "./utils/api"

function App() {
    const [employeeState, setEmployeeState] = useState({
      employeeList: [],
      originalList: [],
      search: ""
    })

  useEffect(()=>{

   API.getEmployee().then((res)=>{
       console.log(res.data.results)
   })

  },[])

  return (
    <EmployeeContext.Provider  value = {employeeState} >
        <Jumbotron/>
        <Textbox/>
        <br/>
        <Table/>
    </EmployeeContext.Provider>
  );
}

export default App;
