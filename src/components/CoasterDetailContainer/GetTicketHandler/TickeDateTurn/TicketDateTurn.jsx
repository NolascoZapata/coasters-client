import React from 'react';
import './TicketDateTurn.css'

function padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

function formatDate(date) {
  return [
    date.getFullYear(),
    padTo2Digits(date.getMonth() + 1),
    padTo2Digits(date.getDate()+1)
    
    ].join('-');
}


function TickeDateTurn(props) {
  const {handleDate,handleTurn}= props
  return (
    <div id='ticketDateTurn' className="ticket-date-turn">
      <label> Date: </label>
      <input  type="date" min={formatDate(new Date())} onChange={handleDate} />
      <select onChange={handleTurn} defaultValue="">
        <option value="">Select a Turn</option>
        <option value="1">Turn 1 (09:00)</option>
        <option value="2">Turn 2 (09:30)</option>
        <option value="3">Turn 3 (10:00)</option>
        <option value="4">Turn 4 (10:30)</option>
        <option value="5">Turn 5 (11:00)</option>
        <option value="6">Turn 6 (11:30)</option>
        <option value="7">Turn 7 (12:00)</option>
        <option value="8">Turn 8 (12:30)</option>
        <option value="9">Turn 9 (13:00)</option>
        <option value="10">Turn 10 (13:30)</option>
        <option value="11">Turn 11 (14:00)</option>
        <option value="12">Turn 12 (14:30)</option>
        <option value="13">Turn 13 (15:00)</option>
        <option value="14">Turn 14 (15:30)</option>
        <option value="15">Turn 15 (16:00)</option>
        <option value="16">Turn 16 (16:30)</option>
      </select>
    </div>
  )
}

export default TickeDateTurn