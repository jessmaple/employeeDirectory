import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
export default function Table(props) {
  const employeeState = useContext(EmployeeContext);
  return (
    <div>
      {console.log("employee: ", employeeState.employeeList)}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Image</th>
            <th scope="col">Name</th>
            <th scope="col">Phone</th>
            <th scope="col">Email</th>
            <th scope="col">DOB</th>
          </tr>
        </thead>
        <tbody>
          {employeeState.employeeList.map((employee) => {
            return (
              <tr>
                <th scope="row">
                  <img src={employee.picture.thumbnail} />
                </th>
                <td>
                  {employee.name.first} {employee.name.last}
                </td>
                <td>{employee.phone}</td>
                <td>{employee.email}</td>
                <td>{employee.dob}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
