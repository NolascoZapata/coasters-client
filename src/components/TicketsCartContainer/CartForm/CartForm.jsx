import React, {useContext, useState} from 'react';

import { TicketsContext } from './../../../context/TicketsContext';
import './CartForm.css'


const initialState ={
  name:'',
  email:''
}
  

function CartForm() {

  const {ticketList,total,cleanCart,cartLenght}= useContext(TicketsContext)  
  const [buyer, setBuyer] = useState(initialState)
  const order = {buyer, item:ticketList, total: `$${total()}`}
  
  const handlerChange = (evt)=>{
    evt.preventDefault()
      setBuyer({
          ...buyer,
          [evt.target.name]: evt.target.value,
      })
  }
  const handlerSubmit=(evt)=>{
    
    evt.preventDefault()
    if (cartLenght===undefined || cartLenght===0) {
    alert(`Empty cart`);

    } else {
      const axios = require('axios')
      axios.post(`${process.env.REACT_APP_API_URL}/api/orders`, order)
          .then(res=>res)
          .catch(error=> console.log(error))
          .then(res=>alert(`Reserved tickets!, your tracking code is ${res.data}`))

      cleanCart()
      setBuyer(initialState)
      
    }
    
  }

  return (
    <div className='cart-form' >
      <h3>Where do we send your tickets?</h3>
      <form 
                  onSubmit={handlerSubmit}
                  onChange={handlerChange}
              >
                  <input
                      className='text-input'
                      type='text'
                      placeholder='Name' 
                      name='name'
                      defaultValue={buyer.name}
                      required
                  />
                  <input
                      className='text-input'
                      type='email' 
                      placeholder='E-mail' 
                      name='email'
                      defaultValue={buyer.email}
                      required
                  />
                  <button className='btn'>Buy now!</button>
                  
                  
      </form>
    </div>
  )
}

export default CartForm