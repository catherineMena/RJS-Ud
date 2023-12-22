import React from "react";
import Employee from "./Employee";

export default function EmployeeList() {
  const employees = [
    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
    },
    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
    },
    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
    },

    {
      name: "daysi",
      gender: "mike",
      country: "joe",
      age: "12",
    },
  ];
  return (
    <div>
      {employees.map((employee) => 
        <Employee 
        name={employee.name} 
        gender={employee.gender} 
        country={ employee.country} 
        age={ employee.age}
        
        />
      
      )}
    </div>
  );
}
