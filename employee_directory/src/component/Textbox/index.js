import React , {useContext}from "react";
import EmployeeContext from "../../utils/EmployeeContext"
export default function Textbox({handleInputChange}){
    const {search}= useContext(EmployeeContext)
   return(
       <div>
           <input type="text" name="search" value= {search} onChange = {handleInputChange}  className="textBox"/>
          
       </div>
   )
}