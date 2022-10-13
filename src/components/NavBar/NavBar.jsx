import React, {useState}from 'react';
import { NavLink } from 'react-router-dom';
import'./NavBar.css'

function NavBar() {
  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
      setMenu( !menu )
  }
  return (
    <div className='navbar'>     
      <button onClick={ toggleMenu } className="navbar-button">
        <svg className='navbar-svg' xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
      </button>

        <nav className={ `navbar-nav ${ menu ? 'isActive' : '' }` }>
            <ul className="navbar-ul">
                <li className="navbar-li"><NavLink to="/" className="navbar-a">Home</NavLink></li>
                <li className="navbar-li"><NavLink to="/cart" className="navbar-a">Cart</NavLink></li>
                <li className="navbar-li"><NavLink to="/about" className="navbar-a">About us</NavLink></li>
                <li className="navbar-li"><NavLink to="/contact" className="navbar-a">Contact us</NavLink></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
