import React,{useState} from 'react'
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

        
        // .then(({id})=>{
        //     swal({
        //         title:`Consulta enviada!`,
        //         text:`La identificacion de consulta es : ${id}`,
        //         icon:"success",
        //         height: "340px"
        //     })
        //     setUser(initialState)
        // })
        
    }

  return (
    <React.Fragment>
        <h2>Contact us!</h2>
        <img src="https://images.pexels.com/photos/749064/pexels-photo-749064.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
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
          <button>Send Message </button>
        </form>        
    </React.Fragment>
  )
}

export default ContactContainer