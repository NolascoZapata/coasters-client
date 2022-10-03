import React from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import './AboutUs.css';
import NavBar from './../NavBar/NavBar'

function AboutUs() {
  return (
      <div className='about-container'>
        <NavBar/>
        <div className='about'>
          <h2>About Us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quis, aliquid animi deserunt molestias inventore corporis vero dicta voluptas at accusamus suscipit voluptate deleniti accusantium incidunt eveniet neque cumque id.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quis, aliquid animi deserunt molestias inventore corporis vero dicta voluptas at accusamus suscipit voluptate deleniti accusantium incidunt eveniet neque cumque id.</p>
          <ButtonArrow content="Get Tickets!" link="/"/>
        </div>
        
      </div>
    
  )
}

export default AboutUs