import React, { useContext } from "react";
import EmployeeContext from "../../utils/EmployeeContext";
export default function Table(props) {
  let employeeState = useContext(EmployeeContext);
  return (
    <div>
      {/* {console.log("employee: ", employeeState.employeeList)} */}
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
          {employeeState.employeeList.length > 0
            ? employeeState.employeeList.map((employee, id) => {
                return (
                  <tr key={id}>
                    <td>
                      <img src={employee.picture.thumbnail} />
                    </td>

                    <td>
                      {employee.name.first} {employee.name.last}
                    </td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>{employee.dob.date}</td>
                  </tr>
                );
              })
            : ""}
        </tbody>
      </table>
    </div>
  );
}
