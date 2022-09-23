import React, {useContext, useState} from 'react';
import { TicketsContext } from './../../../context/TicketsContext';


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
      axios.post('https://coasters-service.onrender.com/api/orders', order)
          .then(res=>res)
          .catch(error=> console.log(error))
          .then(res=>alert(`Reserved tickets!, your tracking code is ${res.data}`))

      cleanCart()
      setBuyer(initialState)
      
    }
    
  }

  return (
    <>
    <h3>Enter your data</h3>
    <form className='formulario-comprador'
                onSubmit={handlerSubmit}
                onChange={handlerChange}
            >
                <input 
                    type='text'
                    placeholder='Name' 
                    name='name'
                    defaultValue={buyer.name}
                    required
                />
                <input 
                    type='email' 
                    placeholder='E-mail' 
                    name='email'
                    defaultValue={buyer.email}
                    required
                />
                <button>Buy now!</button>
                
                
            </form>
</>
  )
}

export default CartForm