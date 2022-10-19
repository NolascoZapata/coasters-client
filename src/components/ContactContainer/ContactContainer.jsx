import React,{useState} from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import NavBar from '../NavBar/NavBar';
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
      axios.post(`${process.env.REACT_APP_API_URL}/api/messages`, message)
          .then(res=>res)
          .catch(error=> console.log(error))
          .then(res=>alert(`Message sent!,  we will reply as soon as possible. MessageId is ${res.data}`))

      setMessage(initialState)
      resetInputs()
    }

  return (
      <div className='contact-container'>
        <NavBar/>
        <div className='contact'>
            <h2>Contact us!</h2>
            <form
          onSubmit={handlerSubmit}
          onChange={handlerChange}
        >
          <input 
              className='text-input'
              type='text'
              placeholder='Name' 
              name='name'
              id='nameInput'
              defaultValue={message.name}
              required
          />
          <input
              className='text-input'
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