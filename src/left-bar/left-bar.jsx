import React from 'react';
import './left-bar.css';
import Image2 from '../assets/images/neom-Iy59i0M7oP4-unsplash.jpg'

export default function LeftBar() {
  return (
    <div className="container">
      <div className='poster-image'>
        <img className='image-box' src={Image2} alt="img" />
      </div>
      <ul>
        <li className='list-title'>Embrace the challenge and grow stronger.</li>
        <li className='list-title'>Seek knowledge and never stop learning.</li>
        <li className='list-title'>Inspire others through your actions.</li>
        <li className='list-title'>Cherish every moment and live fully.</li>
      </ul>
    </div>
  );
}
