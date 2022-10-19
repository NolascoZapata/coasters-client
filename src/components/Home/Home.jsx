import React, { useEffect } from 'react';
import { useState } from 'react';
import NavBar from '../NavBar/NavBar';
import Spinner from '../Spinner/Spinner';
import CardsContainer from './CardsContainer/CardsContainer';
import './Home.css';




function Home() {

const [coasters, setCoasters] = useState([])
const [loading, setLoading] = useState(true)
useEffect(() => {
  setLoading(true)
  const axios = require('axios')
  axios.get(`${process.env.API_URL}/api/coasters`)
  .then(res=> setCoasters(res.data))
  .catch(error=>console.log(error))
  .finally(() => {
    setLoading(false)
  })
}, [])



  return (
    <div className='attractions'>
      <NavBar/> 
      {loading && <Spinner/> }
      {
        !loading && 
        <>
          <h2>Attractions</h2>
          <CardsContainer coasters={coasters}/>
        </>
      }
    </div>
    
  )
}

export default Home