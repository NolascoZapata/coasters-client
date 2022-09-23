import React from 'react';
import Card from './Card/Card';
import './CardsContainer.css'

function CardsContainer({coasters}) { 
  return (

    <React.Fragment>
      <h3>Cards Container</h3>
      <div className='cards-container'>
          {coasters.map((coaster) => (
              <Card key={coaster._id}  coaster={coaster}/>
            ) 
          )
          }
      </div>
      
      
    </React.Fragment>
    
  )
}

export default CardsContainer