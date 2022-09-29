import React, { useContext } from 'react'
import { TicketsContext } from '../../context/TicketsContext'
import NavBar from '../NavBar/NavBar';
import CartForm from './CartForm/CartForm';
import './TicketsCartContainer.css';


function TicketsCartContainer() {
  const {ticketList,removeTickets,total,cleanCart,cartLenght} = useContext(TicketsContext)

  return (
    <div className='cart-container'>
      <NavBar/>
    <div className='cart-title'>
        <h2>Cart</h2>
        <div className='cart'>
          <button onClick={cleanCart} className='clean-list-btn'>Clean list</button>
          <table  cellPadding="10" cellSpacing="0">
            <thead>
              <tr>
                <th align="left">Attraction</th>
                <th align="center">Date</th>
                <th align="center">Tickets Quantity</th>
                <th align="center">Subtotal</th>
                <th align="center">Remove</th>
              </tr>
            </thead>
            
            {cartLenght === 0 ?
            <tbody>
              <tr>
                <td colSpan="5" style={{"color":"red"}} >Empty Cart</td>
              </tr>
            </tbody>
            
            :
            <tbody>
              {
                ticketList.map(i=>
                  <tr key={i.item._id}>
                    <td>{i.item.title}</td>
                    <td align="center">{i.date} Turn: {i.turn}</td>
                    <td align="center">{i.itemQty}</td>
                    <td align="center">${i.itemQty*i.item.price}</td>
                    <td align="center" onClick={()=>removeTickets(i)}>🗑</td>
                  </tr>
                  )

              }
            </tbody>
            }
            <tfoot>
              <tr key="totalCart">
                <td align='right' colSpan="4">Total Price</td>
                <td align="center">${total()}</td>
              </tr>
            </tfoot>
          </table>
        </div>
        <CartForm/>
    </div>
    </div>
    
  )
}

export default TicketsCartContainer