import React from 'react'

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
    <div id='ticketDateTurn'>
      <label> Date: </label>
      <input  type="date" min={formatDate(new Date())} onChange={handleDate} />
      <select onChange={handleTurn} defaultValue="">
        <option value="">Select a Turn</option>
        <option value="1">Turn 1</option>
        <option value="2">Turn 2</option>
        <option value="3">Turn 3</option>
        <option value="4">Turn 4</option>
        <option value="5">Turn 5</option>
        <option value="6">Turn 6</option>
        <option value="7">Turn 7</option>
        <option value="8">Turn 8</option>
        <option value="9">Turn 9</option>
        <option value="10">Turn 10</option>
        <option value="11">Turn 11</option>
        <option value="12">Turn 12</option>
        <option value="13">Turn 13</option>
        <option value="14">Turn 14</option>
        <option value="15">Turn 15</option>
        <option value="16">Turn 16</option>
      </select>
    </div>
  )
}

export default TickeDateTurn