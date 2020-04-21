import React,{createContext} from "react"

const EmployeeContext = createContext({
    employeeList: [],
    search: ""
})