import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

  let location = useLocation();
  //console.log(location)

  const amount = useSelector(state => state.amount)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">State bank of Chintan</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${location.pathname === "/about" ? "active" : ""}`} to="/about">About</Link>
            </li>
          </ul>

          <div>
            <button className="btn btn-primary">Your Balance: {amount}</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar