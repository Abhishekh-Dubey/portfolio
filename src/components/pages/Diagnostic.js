
import React from 'react';
import images from '../../images/Diagnostic.jpg'
import './Diagnostic.css'


export default function Diagnostic() {
  return(
    <div className='DiagnostichContainer'>
  <h1 className='Diagnostich1'>Diagnostic Information</h1>
  <div>
  <img src={images} alt='' className='image12'/>
  </div>
  </div>
  );
}

  

