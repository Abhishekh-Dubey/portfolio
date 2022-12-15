
import React from 'react';
import './SecurityandLoginSetting.css'

export default function SecurityandLoginSetting() {
  return(
  <div className='admin'>
  <h1 className='SecurityandLoginSetting'>Security and Login Setting</h1>;

  <div className="container125">
  <div className='gri2'>
  <label for="uname"><b>Change Password</b></label>
  <input className='input1' type="text" placeholder="Enter Change Password" name="uname" required/>
  <label for="uname"><b>E-mail</b></label>
  <input className='input1' type="text" placeholder="Enter E-mail" name="uname" required/>
  <label for="uname"><b>Phone no.</b></label>
  <input className='input1' type="text" placeholder="Enter Phone no." name="uname" required/>
  
  
  <button1 className='button1' type="submit">Submit</button1>
  
  </div>
</div>
</div>
  )
}



