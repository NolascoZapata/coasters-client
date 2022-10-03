import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faInstagramSquare, faFacebookSquare, faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import './Footer.css'


function Footer() {
  return (
  <div className='footer'>
    <div className="footer-social-media">
        <a href="/#"><FontAwesomeIcon icon={faFacebookSquare} /></a>
        <a href="/#"><FontAwesomeIcon icon={faInstagramSquare} /></a>
        <a href="/#"><FontAwesomeIcon icon={faTwitterSquare} /></a>
    </div>
    <p className="footer-copyright">Copyright RollerTickets© </p>
  </div>
  )
}

export default Footer