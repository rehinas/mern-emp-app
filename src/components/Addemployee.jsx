import React, { useState } from 'react';
import axios from 'axios';

const Addemployee = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phn: '',
    salary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/api/employees', formData)
      .then((response) => {
        alert('Employee data saved successfully:', response.data);
        
      })
      .catch((error) => {
        console.error('Error saving employee data:', error);
      
      });
  };

  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
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
      <h2>Add Employee</h2>
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
          Submit
        </button>
      </form>
    </div>
  );
};

export default Addemployee;
