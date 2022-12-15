
import React from 'react';
import './GeneralProfile.css'

export default function GeneralProfile() {
  return(
    <div className='admin'>
  <h1 className='GeneralProfile'> General Profile</h1>
  
  <div className="container123">
  <div className='gri'>
       <label for="uname"><b>First name</b></label>
       <input className='input1' type="text" placeholder="Enter Firstname" name="uname" required/>
       <label for="uname"><b>Middle name</b></label>
       <input className='input1' type="text" placeholder="Enter Middlename" name="uname" required/>
       <label for="uname"><b>Last name</b></label>
       <input className='input1' type="text" placeholder="Enter Lastname" name="uname" required/>
       <label for="uname"><b>Username</b></label>
       <input className='input1' type="text" placeholder="Enter Usenname" name="uname" required/>
       
       <button1 className='button1' type="submit">Submit</button1>
       
       </div>
     </div>
  </div>
  );
}

  