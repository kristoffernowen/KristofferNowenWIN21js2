import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">Mitt Företag</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/customers">Kunder</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="registercustomers">Registrera ny kund</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/welcomeback">Logga ut</NavLink>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
    )
}

export default Navbar
