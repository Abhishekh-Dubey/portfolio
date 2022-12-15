

import React from 'react';
import '../../App.css';
import './Signin.css';
import { Link } from 'react-router-dom';
import Popup from './Popup';
import { useState } from 'react';


export default function ResetPassword() {
  const [buttonPopup,setButtonPopup]=useState(false);
  return ( <>
    <div className='Main-login-Div'>
    
    <h1 className='sign-ups'>Reset Password</h1>
   
   
   <form className="modal-content animate">
     
 
     <div className="container">
           <label for="psw"><b>Password</b></label>
      <input className='input' type="password" placeholder="Enter Password" name="psw" required/>
      <label for="psw"><b>Re-Password</b></label>
      <input className='input' type="password" placeholder="Re-Enter Password" name="psw" required/>
           {/* <Link to = '/popup'> */}



           <button onClick={()=>setButtonPopup(true)} className='button' type="submit">Submit</button>

          <Popup trigger={buttonPopup}>
            <h3>Password Successfully Changed !....</h3>
          </Popup>

           {/* </Link> */}
         </div>
         <div className='container5' >
         
         <div className='container' >
         <Link
         to='/Dashboard'> 
        <button  const path ='./SignUp' type="button"  className='cancelbtn'>Cancel</button>
        </Link>
         </div>
         </div>
         
       </form>
     </div>
     
       </> ); ;
    }
    