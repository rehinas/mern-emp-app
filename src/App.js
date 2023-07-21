import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sign from './components/Sign';

import ManageEmployees from './components/ManageEmployees';
import AdminDashboard from './components/AdminDashboard';
import EmployeeDashboard from './components/EmployeeDashbord';
import Front from './components/Front';

import Addemployee from './components/Addemployee';
import Manage from './components/Manage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Front/>}/>
          <Route path='/admin' element={<AdminDashboard/>}/>
          <Route path='/manage' element={<ManageEmployees/>}/>
          <Route path='/user' element={<EmployeeDashboard/>}/>
          <Route path='/sign' element={<Sign/>}/>
          <Route path='/add' element={<Addemployee/>}/>
          <Route path='/emg/:employeeId' element={<Manage/>}/>
          
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
