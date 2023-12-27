import React from "react";
import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
      id: 1,
    },
    {
      name: "catherine",
      gender: "mike",
      country: "joe",
      age: "12",
      id: 2,
    },
    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
      id: 3,
    },
  ];
  return (
    <div>
      {employees.map((employee) => 
        //unique prop key nust be at the top of the statement
        <div key={employee.id}>
          <Employee
            name={employee.name}
            gender={employee.gender}
            country={employee.country}
            age={employee.age}
          />
        </div>
      )}
    </div>
  );
}
