import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import Jumbotron from "./component/Jumbotron";
import Textbox from "./component/Textbox";
import Table from "./component/Table";
import EmployeeContext from "./utils/EmployeeContext";

import API from "./utils/api";

function App() {
  const [employeeState, setEmployeeState] = useState({
    employeeList: [],
    originalList: [],
    search: "",
  });

  useEffect(() => {
    API.getEmployee().then((res) => {
      console.log(res.data.results);
      setEmployeeState({
        ...employeeState,
        employeeList: res.data.results,
        originalList: res.data.results,
      });
    });
  }, []);

 const handleInputChange =  (event)=> {
    const {name, value} = event.target 

    setEmployeeState({
     ...employeeState, 
       
      [name]:value

    })
   
    const newEmployeeList = employeeState.employeeList.filter(person=>{
      return person.name.first.toLowerCase().indexOf(value.toLowerCase())  
    })

      setEmployeeState({
        ...employeeState, 
     
        employeeList: newEmployeeList
      })
     console.log(employeeState.employeeList)

  }
  return (
    <EmployeeContext.Provider value={employeeState}>
      <Jumbotron />
      <Textbox  handleInputChange = {handleInputChange} />
      <br />
      <Table />
    </EmployeeContext.Provider>
  );
}

export default App;
