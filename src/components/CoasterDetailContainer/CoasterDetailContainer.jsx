import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GetTicketHandler from './GetTicketHandler/GetTicketHandler'
import './CoasterDetailContainer.css'





function CoasterDetailContainer() {

  const [selectedCoaster , setSelectedCoaster] = useState([])
    const {id} = useParams()
  
  useEffect(()=>{
      const axios = require('axios')
      axios.get(`https://coasters-service.onrender.com/api/coasters/${id}`)
        .then(res=>res.data)
        .then(data=> setSelectedCoaster(data))
},[id])

  return (
  <div className='card-detail'>
    <img src={selectedCoaster.imageUrl} alt="..."/>
    <div className='details'>
      <h2>{selectedCoaster.title}</h2>
      <p>{selectedCoaster.description}</p>
      <table>
        <thead>
          <tr>
            <th align="center">Length</th>
            <th align="center">Invertions</th>
            <th align="center">Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td align="center">{selectedCoaster.length} m</td>
            <td align="center">{selectedCoaster.inversions}</td>
            <td align="center">${selectedCoaster.price}</td>
          </tr>
        </tbody>
      </table>
      <GetTicketHandler selectedCoaster={selectedCoaster}/>
    </div>
  </div>
    
    
    
  )
}

export default CoasterDetailContainer