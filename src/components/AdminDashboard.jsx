import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    
    axios
      .get('http://localhost:5000/api/employees') 
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error retrieving employees:', error);
      });
  }, []);

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/admin">
            Admin Dashboard
          </a>

         
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
             
            </ul>
          </div>

          
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="/admin">
               Employee Details
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/add">
                Add Employee
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/manage">
                Manage Employee
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Logout
              </a>
            </li>
           
          </ul>
        </div>
      </nav>

      <div className="container mt-4">
        <h2>Employee Details</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone Number</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.address}</td>
                <td>{employee.email}</td>
                <td>{employee.phn}</td>
                <td>{employee.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;





