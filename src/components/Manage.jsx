import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Manage = () => {
  const { employeeId } = useParams();
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phn: '',
    salary: '',
  });

  useEffect(() => {
    if (employeeId) {
      
      axios
        .get(`http://localhost:5000/api/employees/${employeeId}`)
        .then((response) => {
          setFormData(response.data);
        })
        .catch((error) => {
          console.error('Error fetching employee data:', error);
        });
    }
  }, [employeeId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeId) {
      
      axios
        .put(`http://localhost:5000/api/employees/${employeeId}`, formData)
        .then((response) => {
          alert('Employee data updated successfully');
          
        })
        .catch((error) => {
          console.error('Error updating employee data:', error);
      
        });
    }
  };

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
      <h2>Update Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phn">Phone Number</label>
          <input
            type="text"
            className="form-control"
            name="phn"
            value={formData.phn}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="salary">Salary</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
};

export default Manage;

