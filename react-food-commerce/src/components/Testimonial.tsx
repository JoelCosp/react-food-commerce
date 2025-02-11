import React from 'react';
import ProfilePic from '../assets/john-doe-image.png';
import { AiFillStar } from 'react-icons/ai';

const Testimonial = () => {
  return (
    <div className='work-section-wrapper'>
        <div className="work-section-top">
            <p className="primary-subheading">Testimonial</p>
            <h1 className="primary-heading">What They Are Sying</h1>
            <p className="primary-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci nulla ipsam maxime quibusdam eum accusamus nam. Impedit quas eligendi ipsa asperiores, quaerat exercitationem rem id omnis expedita sit in aspernatur.</p>
        </div>
        <div className="testimonial-section-bottom">
            <img src={ProfilePic} alt="/" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum nobis amet optio fugiat deserunt eligendi perspiciatis sapiente, quia eum, doloribus nemo natus modi praesentium, adipisci recusandae. Sapiente sunt cupiditate tempora!</p>            
            <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
            </div>
            <h2>John Doe</h2>
        </div>
    </div>
  )
}

export default Testimonial
