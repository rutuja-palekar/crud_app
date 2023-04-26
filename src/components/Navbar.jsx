import { React, useState } from 'react'
import './Navbar.css'
import { Outlet, NavLink, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [selectedOption, setSelectOption] = useState('defaultOption');
  const location = useLocation();

  const dropdownHandler = (event) => {
    setSelectOption(event.target.value);
  };

  return (
    <div className="header">
      <nav>
        <h1 id="heading">LOGO</h1>
        <ul>
          <li><NavLink to="/Home" className={location.pathname === '/Home' ? 'active' : ''}>Home</NavLink></li>

          <li><NavLink to="/Task" className={location.pathname === '/Task' ? 'active' : ''}>Tasks</NavLink></li>

          <li><NavLink to="/User" className={location.pathname === '/User' ? 'active' : ''}>User</NavLink></li>

          <li><NavLink to="/Login" className={location.pathname === '/Login' ? 'active' : ''}>Login</NavLink></li>

          <Outlet />
        </ul>
      </nav>
    </div>
  )
}
