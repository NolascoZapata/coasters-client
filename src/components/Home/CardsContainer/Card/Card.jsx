import React from 'react';  
import ButtonArrow from '../../../ButtonArrow/ButtonArrow';
import './Card.css'

function Card({coaster}) {

  return (
    <div className='card' style={{backgroundImage:`url("${coaster.imageUrl}")`}}>
            
            <div className='card-text'>
              <h4>{coaster.title}</h4>
              <p>Length: {coaster.length} m</p>
              <ButtonArrow content='Show details' link={`/coasters/${coaster._id}`}/>
            </div>
    </div>

  )
}

export default Card