import React from 'react';
import { Link } from 'react-router-dom';
import './Popup.css';
export default function Popup(props) {
  return (props.trigger)?( <>
    <div className='popup'>
    <div className='popup-inner'>
    <div className='container' >
     <Link
     to='/Dashboard'> 
    <button   type="button"  className='cancelbtn close-btn'>Cancel</button>
    </Link>
    {props.children}
     </div>
    </div>
    </div>
    </> ):"";
    }
    
