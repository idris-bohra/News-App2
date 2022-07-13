import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) { // here props is a props

  function clicked()
  {
    
  }
    return (
      
<nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>

  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">{props.Home}</Link>
        </li>
        <li className = {`nav-item `} onClick={props.click}>
          <Link className= {`nav-link ${props.actval1}`} to="/aboutus">Aboutus</Link>
        </li>
    
      </ul>

      <div className="form-check form-switch mx-4 my-3" >
          <input className="form-check-input" onClick= {props.toggle}  type="checkbox" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" for="flexSwitchCheckDefault"><b>{props.modename} Dark Mode</b></label>
      </div>

    
    </div>
  </div>
</nav>
    )
}

Navbar.propType = {
    title : PropTypes.string.isRequired,
    Home : PropTypes.string
}

Navbar.defaultProps = {
    title : 'enter the title',
    Home : 'enter the home title'
}

