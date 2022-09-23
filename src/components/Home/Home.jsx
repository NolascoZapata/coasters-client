import React, { useEffect } from 'react'
import { useState } from 'react'
import CardsContainer from './CardsContainer/CardsContainer'




function Home() {

const [coasters, setCoasters] = useState([])

useEffect(() => {
  const axios = require('axios')
  axios.get('https://coasters-service.onrender.com/api/coasters')
  .then(res=> setCoasters(res.data))
  .catch(error=>console.log(error))
}, [])





  return (
    <React.Fragment>
      <h2>Home</h2>
      <CardsContainer coasters={coasters}/>

    </React.Fragment>
    
  )
}

export default Home