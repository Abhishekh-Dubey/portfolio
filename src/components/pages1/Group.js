import React from 'react';
import './Group.css';

const Group = () => {
    return (
        <div className='BackgroundImageContainer'>
         <h1 className='group'>Group</h1>
        <div className='GroupContainer'>
            
         <form class="example" action="/action_page.php"  >
         <input  type="text" placeholder="Search.." name="search2" required/>
         <button className='button1112 ' type="submit"><i class="fa fa-search"></i></button>
        </form>
        </div>
        <div className='ActionContainer'>
        <label for="Action">Action :</label>
        <select className='adb' name="Drones" id="Drones">
        <option value="Flynetic">Flynetic</option>
        <option value="Alt-Bird">Alt-Bird</option>
       
        </select>
  
        <input className='abc' type="Submit" value="GO"/>
        
        </div>
<div className='FullBlock'>

       
        <div className='DefaultBlock'>
        <label>
         <input type="checkbox"  name="remember"/> Default
       </label>
        </div>
        <div className='GroupsBlock'>
        <label>
         <input type="checkbox"  name="remember"/> Group
       </label>
        </div>
        </div>
        </div>
    );
};

export default Group;
