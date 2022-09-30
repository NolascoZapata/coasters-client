import React from 'react';
import './Spinner.css'

function Spinner() {
  return (
    <div className='spinner-container'>
      <p>Please wait</p>
      <div className="spinner">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    
  )
}

export default Spinner