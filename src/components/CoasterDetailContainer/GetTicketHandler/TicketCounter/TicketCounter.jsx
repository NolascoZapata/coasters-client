import React, { useState } from 'react';
import ButtonArrow from '../../../ButtonArrow/ButtonArrow';
import './TicketCounter.css'

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
    <div className='ticket-couter'>
      


      {
      onAddTo?
      <React.Fragment>
        <p>Tickets: </p>
        <button onClick={downQty} className='btn'>-</button>
        <label>{quantity}</label>
        <button onClick={upQty} className='btn'>+</button>
        <p>Subtotal : ${quantity*selectedCoaster.price}</p>

        <button type="button" className='btn' onClick={()=> { checkDate(date,turn)}}>
              Get Tickets 
        </button>

      </React.Fragment>
      :

      <ButtonArrow link="/cart" content="Go to cart"/>

      }

    </div>



  )
}

export default TicketCounter