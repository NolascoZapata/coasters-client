import React,{useState} from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import './ContactContainer.css';

const initialState ={
  name:'',
  email:'',
  message:'',
} 

const resetInputs= ()=>{
  document.getElementById('emailInput').value = ''
  document.getElementById('nameInput').value = ''
  document.getElementById('messageInput').value = ''
}
function ContactContainer() {
  const [message, setMessage] = useState(initialState)


    const handlerChange = (evt)=>{
      setMessage({
            ...message,
            [evt.target.name]: evt.target.value,
        })
    }

    const handlerSubmit=(evt)=>{
      evt.preventDefault()
      const axios = require('axios')
      axios.post('https://coasters-service.onrender.com/api/messages', message)
          .then(res=>res)
          .catch(error=> console.log(error))
          .then(res=>alert(`Message sended!,  we will reply as soon as possible. MessageId is ${res.data}`))

      setMessage(initialState)
      resetInputs()
    }

  return (
        <div className='contact-container'>
          <img src="https://images.pexels.com/photos/749064/pexels-photo-749064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div>
            <h2>Contact us!</h2>
            <form
          onSubmit={handlerSubmit}
          onChange={handlerChange}
        >
          <input 
              type='text'
              placeholder='Name' 
              name='name'
              id='nameInput'
              defaultValue={message.name}
              required
          />
          <input 
              type='email' 
              placeholder='E-mail' 
              name='email'
              id='emailInput'
              defaultValue={message.email}
              required
          />
          <textarea
              placeholder='Write here!' 
              name='message'
              id='messageInput'
              defaultValue={message.message}
              required
          />
          
          <ButtonArrow content="Send Message"/>
          </form> 
          </div>
        </div>
  )
}

export default ContactContainer