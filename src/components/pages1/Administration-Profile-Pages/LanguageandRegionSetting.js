
import React from 'react';
import './LanguageandRegionSetting.css'

export default function LanguageandRegionSetting() {
  return(
    <div className='admin'>
  <h1 className='LanguageandRegionSetting'>Language and Region Setting</h1>;

  <div className="container124">
  <div className='gri1'>
  <label for="uname"><b>Language</b></label>
  <input className='input1' type="text" placeholder="Enter Language" name="uname" required/>
  <label for="uname"><b>Region</b></label>
  <input className='input1' type="text" placeholder="Enter Region" name="uname" required/>
  <label for="uname"><b>Date and Time</b></label>
  <input className='input1' type="text" placeholder="Enter Date and Time" name="uname" required/>
  
  
  <button1 className='button1' type="submit">Submit</button1>
  
  </div>
</div>
</div>
  )
}
