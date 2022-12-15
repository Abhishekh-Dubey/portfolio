
import React from 'react';
import './Administration-Profile.css';

import '../../App.css';
import { Link } from 'react-router-dom';

export default function AdministrationProfile() {
return (<div className='admin1'><h1 className='AdministrationProfile'>Administration Profile</h1>
<div class="grid-container">
  <div class="grid-item1">
  <div className='gps'>General Profile Setting</div>
  </div>

  <div class="grid-item1">
  <div className='btn111'>
<Link to="/Generalprofile">
<button   className='button' >Edit</button>
</Link>
</div>
</div>


<div class="grid-item1">
  <div className='gps'>Security and Login Setting</div>
  </div>

  <div class="grid-item1">
  <div className='btn111'>
  <Link to="./SecurityandLoginSetting">
<button   className='button' >Edit</button>
</Link>
</div>
</div>
<div class="grid-item1">
  <div className='gps'>Language and Region Setting</div>
  </div>

  <div class="grid-item1">
  <div className='btn111'>
  <Link to="./LanguageandRegionSetting">
  
<button   className='button' >Edit</button>
</Link>
</div>
</div>

<div class="grid-item1">
  <div className='gps'>Bar Chat</div>
  </div>

  <div class="grid-item1">
  <div className='btn111'>
  <Link to="./BarChat">
<button   className='button' >Edit</button>
</Link>
</div>
</div>
</div>

</div>
)
}