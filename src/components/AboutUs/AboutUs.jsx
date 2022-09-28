import React from 'react';
import ButtonArrow from '../ButtonArrow/ButtonArrow';
import './AboutUs.css';


function AboutUs() {
  return (
    <React.Fragment>
      <div className='about'>
        <img src="https://images.pexels.com/photos/66143/pexels-photo-66143.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        <div className='title-text'>
          <h2>About Us</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quis, aliquid animi deserunt molestias inventore corporis vero dicta voluptas at accusamus suscipit voluptate deleniti accusantium incidunt eveniet neque cumque id.</p>
          <ButtonArrow content="Get Tickets!" link="/"/>

        </div>
        
      </div>
    </React.Fragment>
    
  )
}

export default AboutUs