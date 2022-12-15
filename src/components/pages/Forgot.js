
import React from 'react';
import '../../App.css';
import './Signin.css';
import { Link } from 'react-router-dom';

export default function Forgot() {
  return ( <>
    <div className='Main-login-Div'>
    
    <h1 className='sign-ups'>Reset Password</h1>
   
   
   <form className="modal-content animate">
     
 
     <div className="container">
       <label for="uname"><b>E-mail Id</b></label>
       <input className='input' type="text" placeholder="Enter E-mail Id" name="uname" required/>
      
       
       <Link to = '/Otp'>
       <button className='button' type="submit">Submit</button>
       </Link>
     </div>
     <div className='container5' >
     
     <div className='container' >
     <Link
     to='/Dashboard'> 
    <button   type="button"  className='cancelbtn'>Cancel</button>
    </Link>
     </div>
     </div>
     
   </form>
 </div>
 
   </> );
}

  
