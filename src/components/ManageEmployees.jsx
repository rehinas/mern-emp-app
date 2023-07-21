import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageEmployees = () => {
  const [employees, setEmployees] = useState([]);

  const handleUpdate = (employeeId) => {
    
    window.location.href = `/emg/${employeeId}`;
  };

  const handleDelete = async (employeeId) => {
    try {
      
      await axios.delete(`http://localhost:5000/api/employees/${employeeId}`);
     
      window.location.reload();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  useEffect(() => {
    
    axios
      .get('http://localhost:5000/api/employees')
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error('Error fetching employees:', error);
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
        <h2>Manage Employees</h2>
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Phone number</th>
              <th scope="col">salary</th>
              <th scope="col">Actions</th>
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
                <td>
                  
                  <button
                    className="btn btn-primary mr-2"
                    onClick={() => handleUpdate(employee._id)}
                  >
                    Update
                  </button>
                  
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(employee._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageEmployees;



