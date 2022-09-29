import React from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import './AboutUs.css';


function AboutUs() {
  return (
    <React.Fragment>
      <div className='about'>
        <div className='img-xs'></div>
        <h2>About Us</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quis, aliquid animi deserunt molestias inventore corporis vero dicta voluptas at accusamus suscipit voluptate deleniti accusantium incidunt eveniet neque cumque id.Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quis, aliquid animi deserunt molestias inventore corporis vero dicta voluptas at accusamus suscipit voluptate deleniti accusantium incidunt eveniet neque cumque id.</p>
        <ButtonArrow content="Get Tickets!" link="/"/>
        </div>
    </React.Fragment>
    
  )
}

export default AboutUs