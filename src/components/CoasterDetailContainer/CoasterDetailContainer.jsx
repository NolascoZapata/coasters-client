import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import GetTicketHandler from './GetTicketHandler/GetTicketHandler'





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
    <React.Fragment>
    <h2>{selectedCoaster.title}</h2>
    <div className='card-detail'>
            <img src={selectedCoaster.imageUrl} alt="..."/>
            <div>
              <p>Length: {selectedCoaster.length}</p>
              <p>Description : {selectedCoaster.description}</p>
              <p>Inversions: {selectedCoaster.inversions}</p>
              <p>Price: ${selectedCoaster.price}</p>
              <GetTicketHandler selectedCoaster={selectedCoaster}/>
            </div>
    </div>
    </React.Fragment>
  )
}

export default CoasterDetailContainer