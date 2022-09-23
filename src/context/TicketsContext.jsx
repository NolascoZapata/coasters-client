import React, { createContext,  useState } from "react";

export const TicketsContext = createContext()


function UseTicketsContext({ children }) {

  const [ticketList, setTicketList] = useState([])
  const saveTickets = (ticket) => {
    const ticketIndex = ticketList.findIndex(t => ticket.item._id === t.item._id)

    if(ticketIndex === -1){
      
      setTicketList([...ticketList,ticket])
      
    }else{
      const ticketQty = ticketList[ticketIndex].itemQty + ticket.itemQty
      const oldTicketList = ticketList.filter(oldTicket => oldTicket.item._id !== ticket.item._id)
      setTicketList([...oldTicketList, {item: ticket.item , itemQty: ticketQty,  date: ticket.date, turn: ticket.turn}])
    }

  }

  //remove Item from cart 
  const removeTickets=(oldTicket)=>{
    const oldTicketList = ticketList.filter(ticket=> ticket.item._id !== oldTicket.item._id)
    setTicketList(oldTicketList)
  }

  //total
  const total=()=>{
    return ticketList.reduce((previousValue, currentValue)=>(previousValue + (currentValue.itemQty*currentValue.item.price)),0)
  }


  //clean cart
  const cleanCart= ()=>{
    setTicketList([])
  }


  return (
    <TicketsContext.Provider
      value={{ 
        ticketList,
        saveTickets, 
        removeTickets, 
        total, 
        cleanCart,
        cartLenght:ticketList.length
        }}
    >
      {children}
    </TicketsContext.Provider>
  );
}

export default UseTicketsContext