import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import image from '../../assets/steel_plant_logo.jpeg'
function Navbar() {
  return (
    <nav className="navbar">
        <div className="container">
            <div className="logo">
             <img src={image} alt='Steel-Plant-Logo'/>     
            </div>
            <div className="navbar_heading">
                  rastriya ispat nigam limited
                  <p>visakhapatnam steel plant</p>
                  <p>(A Govt. of India Enterprise)</p>
            </div>
            {/*<div className='links' >
                <ul className='ul-flex'>
                    <li>
                      <div className='nav-link'>
                      <NavLink to="/sign-in"><span><HowToRegIcon/>Sign In</span></NavLink>
                      </div>
                    </li>
                    <li>
                        <div className='nav-link'>
                          <NavLink to="/sign-up"><span> <LoginIcon/>Log In</span></NavLink>   
                        </div>
                    </li>
                </ul>
  </div>*/}
        </div>
    </nav>
  )
}

export default Navbar