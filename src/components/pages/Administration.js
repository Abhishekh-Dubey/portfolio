import React, { useState } from 'react';
import {FaUserAlt, FaPlug }from "react-icons/fa";
import {DiAppcelerator }from "react-icons/di";
// import {TfiThemifyFaviconAlt}from "react-icons/tfi";
import {SiBrandfolder}from "react-icons/si";
import { BsFillArrowRightCircleFill}from "react-icons/bs";
// import {FaTh}from "react-icons/fa"
// import{TfiHandOpen} from "react-icons/tfi"
// import { BsFillArrowLeftCircleFill}from "react-icons/bs";
import {MdGroups}from "react-icons/md";
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';



import './Administration.css';
export default function Administration({children}){
 const[isOpen ,setIsOpen] = useState(false);
const toggle = () => setIsOpen (!isOpen);
const menuItem=[
    // {
    //     path:"/",
    //     name:"Dashboard",
    //     icon:<FaTh/>
    // },
    {
        path:"/AdministrationProfile",
        name:"Administration Profile",
        icon:<FaUserAlt/>
    },
    {
        path:"/Group",
        name:"Groups",
        icon:<MdGroups/>
    },
    {
        path:"/Brand",
        name:"Brand",
        icon:<SiBrandfolder/>
    },
    // {
    //     path:"/Theme",
    //     name:"Theme",
    //     icon:<TfiThemifyFaviconAlt/>
    // },
    {
        path:"/Plugimnes",
        name:"Plugimnes",
        icon:<FaPlug/>
    },
    {
        path:"/Application",
        name:"Application",
        icon:<DiAppcelerator/>
    },

]

return (
    <div className='container3'>
       <div style={{width: isOpen ? "20%" : "50px"}} className="sidebar">
           <div className="top_section">
           <h1 style={{display: isOpen ? "block" : "none"}} >
            <img src={logo} alt='' className='logo'/>
            </h1>
            
               <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars ">
                   <BsFillArrowRightCircleFill onClick={toggle}  />

               </div>
           </div>
           {
               menuItem.map((item, index)=>(
                   <NavLink to={item.path} key={index} className="link" activeclassName="active">
                       <div className="icon">{item.icon}</div>
                       <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                   </NavLink>
               ))
           }
       </div>
       <main>{children}</main>
    </div>
);
};
