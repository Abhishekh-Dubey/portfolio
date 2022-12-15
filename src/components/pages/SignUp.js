
import React from 'react';
import '../../App.css';
import './Signin.css';
import { Link } from 'react-router-dom';


export default function SignUp() {
  return ( <>
    <div className='Main-login-Div'>
    
    <h1 className='sign-ups'>Welcome to SignUp</h1>
   
   
   <form className="modal-content animate">
     
 
     <div className="container">
       <label for="uname"><b>First name</b></label>
       <input className='input' type="text" placeholder="Enter Username" name="uname" required/>
       <label for="uname"><b>Last name</b></label>
       <input className='input' type="text" placeholder="Enter Username" name="uname" required/>
       <label for="uname"><b>e-mail ID</b></label>
       <input className='input' type="text" placeholder="Enter Username" name="uname" required/>
       <label for="psw"><b>Password</b></label>
       <input className='input' type="password" placeholder="Enter Password" name="psw" required/>
       <label for="psw"><b>Re-enter-Password</b></label>
       <input className='input' type="password" placeholder="Enter Password" name="psw" required/>
       <button className='button' type="submit">Submit</button>
       <label>
         <input type="checkbox"  name="remember"/> Remember me
       </label>
     </div>
     <div className='container5' >
     
     <div className='container2' >
     <Link
     to='/Sign-in'> 
    <button  const path ='./SignUp' type="button"  className='cancelbtn'>Cancel</button>
    </Link>
     </div>
     </div>
     
   </form>
 </div>
 
   </> );
}
