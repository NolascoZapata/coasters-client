import React,{ useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import GetTicketHandler from './GetTicketHandler/GetTicketHandler';
import Spinner from '../Spinner/Spinner';
import NavBar from '../NavBar/NavBar';
import './CoasterDetailContainer.css';





function CoasterDetailContainer() {

  const [selectedCoaster , setSelectedCoaster] = useState([])
  const [loading, setLoading] = useState(true)
  const {id} = useParams()
  
  useEffect(()=>{
    setLoading(true)
      const axios = require('axios')
      axios.get(`${process.env.API_URL}/api/coasters/${id}`)
        .then(res=>res.data)
        .then(data=> setSelectedCoaster(data))
        .finally(() => {
          setLoading(false)
        })
},[id])

  return (
    <div className='coaster-deatil-container'>
      <NavBar/>
      {loading && <Spinner/>}
      {!loading && 
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
      }      
    </div>
    
  )
}

export default CoasterDetailContainer