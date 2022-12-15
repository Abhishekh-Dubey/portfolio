import React from 'react';
import "./Application.css"
import {SiAddthis} from 'react-icons/si';
import {AiOutlineEdit} from 'react-icons/ai';
export default function Application()
 {
  return (<div className='MainBackgroundApplication'>
  <h1 className='Application'>Application</h1>
 <div className='maincontaineApplication'>
 <div className='gridContaineApplication'>
    <div >
    <table className='table' id="customers">
  <tr>
  
   <th>Applications</th>
   <th>Add to Change</th>
   <th>Changes</th>
  </tr>
  <tr>
    <td>Image Uploads</td>
    <td ><div className='icon2'><SiAddthis /> Add </div> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Plugins Datum</td>
    <td ><div className='icon2'><SiAddthis /> Add </div> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Plugins</td>
    <td> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Presets</td>
    <td ><div className='icon2'><SiAddthis /> Add </div> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Projects</td>
    <td ><div className='icon2'><SiAddthis /> Add </div> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Settings</td>
    <td> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Tasks</td>
    <td> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>
  <tr>
    <td>Theme</td>
    <td ><div className='icon2'><SiAddthis /> Add </div> </td>
    <td><div className='icon2'> <AiOutlineEdit/> Change</div></td>
  </tr>

</table>
</div>
</div>
</div>
</div>
  )
  }
 
  