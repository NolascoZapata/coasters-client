import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

function TicketCounter(props) {

  const {initialQuantity, onAdd ,date,turn,selectedCoaster}=props
  const [quantity, setQuantity] = useState(initialQuantity)
  const [onAddTo, setOnAddTo]=useState(true)

  function checkDate (date,turn){
    if (date===''&& turn ==='') {
      alert('Please select a day and a turn') 
    } else if(date===''){
      alert('Please select a day')      
    }else if(turn===''){
      alert('Please select a turn')
    }else{
      setOnAddTo(false) ;
      onAdd(quantity) ;
      document.getElementById('ticketDateTurn').innerHTML=''
    }
      return null
  }


  function downQty() {
    if (quantity>initialQuantity) {
      setQuantity(quantity-1)
    }
  }
  function upQty() {
    if (quantity<100) {
      setQuantity(quantity+1)
    }
  }

  return (
    <div>
      


      {
      onAddTo?
      <React.Fragment>
        <p>Tickets: </p>
        <button onClick={downQty}>-</button>
        <label>{quantity}</label>
        <button onClick={upQty}>+</button>
        <p>Subtotal : ${quantity*selectedCoaster.price}</p>
        <button type="button"  onClick={()=> { checkDate(date,turn)}}>
              Get Tickets 
        </button>
      </React.Fragment>
      :
      
      <button type="button">
          <NavLink to='/cart'>Go to cart </NavLink>
      </button>
      }

    </div>



  )
}

export default TicketCounter