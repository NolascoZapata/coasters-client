import React from 'react'
import { Link } from 'react-router-dom' ;
import './Card.css'

function Card({coaster}) {

  return (
    <div className='card'>
            <img src={coaster.imageUrl} alt={`${coaster.title}-img`}/>
            <div className='card-text'>
              <h4>{coaster.title}</h4>
              <p>Length: {coaster.length} m</p>
              <button><Link to={`/coasters/${coaster._id}`} >Show details </Link></button>
            </div>
    </div>

  )
}

export default Card