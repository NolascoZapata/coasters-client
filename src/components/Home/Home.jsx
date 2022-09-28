import React, { useEffect } from 'react'
import { useState } from 'react'
import Spinner from '../Spinner/Spinner'
import CardsContainer from './CardsContainer/CardsContainer'




function Home() {

const [coasters, setCoasters] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
  setLoading(true)
  const axios = require('axios')
  axios.get('https://coasters-service.onrender.com/api/coasters')
  .then(res=> setCoasters(res.data))
  .catch(error=>console.log(error))
  .finally(() => {
    setLoading(false)
  })
}, [])



  return (
    <React.Fragment>
      {loading && <Spinner/> }
      {
        !loading && 
        <>
          <h2>Home</h2>
          <CardsContainer coasters={coasters}/>
        </>
      }
      

    </React.Fragment>
    
  )
}

export default Home