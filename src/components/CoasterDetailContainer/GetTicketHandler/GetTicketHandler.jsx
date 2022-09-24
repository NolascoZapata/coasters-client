import React, { useState,useContext } from 'react';
import { TicketsContext } from '../../../context/TicketsContext';
import TickeDateTurn from './TickeDateTurn/TickeDateTurn';
import TicketCounter from './TicketCounter/TicketCounter';


function GetTicketHandler({selectedCoaster}) {
  
  const [quantity,setQuantity] = useState(1);
  const [date,setDate] = useState('');
  const [turn,setTurn] = useState('');
  const {saveTickets} = useContext(TicketsContext);


  const handleCount=(qty)=>{
        
    setQuantity(qty)
    saveTickets({item:selectedCoaster, itemQty: qty , date: date, turn: turn})
  };
  const handleDate=(e)=>{
    setDate(e.target.value)
    
  };
  const handleTurn=(e)=>{
    setTurn(e.target.value)
    
  }



  return (
    <React.Fragment>
      <h3>Get your ticket!</h3>
      <TickeDateTurn handleDate={handleDate} handleTurn={handleTurn}/>
      <TicketCounter selectedCoaster={selectedCoaster} onAdd={handleCount} date={date} turn={turn} initialQuantity={quantity} />
    </React.Fragment>
  )
}

export default GetTicketHandler