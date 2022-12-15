import React from 'react';
import '../../App.css';
import "./Signin.css";
import { Link } from 'react-router-dom';
import Popup from './LogInPopup';
import { useState } from 'react';
import { ImCancelCircle}from "react-icons/im";

export default function SignIn() {


  const [buttonPopup,setButtonPopup]=useState(false);

 

  return ( <>
   <div className='Main-login-Div'>
   
   <h1 className='sign-in'>Welcome to Login</h1>
  <div className='modal-content animate'>
   <div className="container">
  <form className=" animate">
    

  
    <div className='username'>
      <label  for="uname"><b>Username</b></label>
      </div>
      <div  className='cancelButton345'>
    <Link
     to='./Dashboard'> 
   <ImCancelCircle />
   </Link>
    </div>
      <input className='input' type="text" placeholder="Enter Username" name="uname" required/>

      <label for="psw"><b>Password</b></label>
      <input className='input' type="password" placeholder="Enter Password" name="psw" required/>
      <div className='remember '>
      <Popup trigger={buttonPopup}>
        <h3> Successfully Login !....</h3>
      </Popup>
      <label>
        <input type="checkbox"  name="remember"/> Remember me
      </label>
      <div>
    <button onClick={()=>setButtonPopup(true)} className='button343 login-buton' type="submit">Login</button>
    </div>
      </div>
     
     

    
  
    <div className='Signuplink '>
      <Link
              to='/SignUp'
            >     
    <h4 >Sign Up</h4>
    </Link>
    
    <Link
     to='/Forgot'> 
    <h4 className='Forgot-password'>Forgot password</h4>
      </Link>
      </div>
    {/* </div> */}
    

    
  </form>
  </div>
</div>
</div>

  </> );
} 
