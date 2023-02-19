import React from 'react';
import {RiSendPlaneFill} from 'react-icons/ri';
import {FaSignInAlt} from 'react-icons/fa';
import {GrServices} from 'react-icons/gr'
import './journey.css'

const journey = () => {
  return (
    <section className='journey-section'>
        <h2>Start Your Journey In Just 3 Steps</h2>
        <div className='journey-grid'>
            <div className='journey-circle'>
                <FaSignInAlt className='svg1'/>
                <h3>Sign Up On Sarvvid</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do</p>
            </div>
            <div className='journey-circle'>
                <RiSendPlaneFill className='svg2'/>
                <h3>Choose A Plan</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint.</p>
            </div>
            <div className='journey-circle'>
                <GrServices className='svg3'/>
                <h3>Select Our Service</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint.</p>
            </div>
        </div>
    </section>
  )
}

export default journey