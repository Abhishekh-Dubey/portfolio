import React, { useState } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logo from '../images/logo.png'
import {AiOutlineDashboard, AiOutlineEnvironment, AiFillPieChart, AiFillInfoCircle, AiFillSetting} from 'react-icons/ai'
import {BsLightning} from 'react-icons/bs'
// import {VscTools} from 'react-icons/vsc'
function Navbar() {
  const [click, setClick] = useState(false);
  // const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const onMouseEnter = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(true);
  //   }
  // };

  // const onMouseLeave = () => {
  //   if (window.innerWidth < 960) {
  //     setDropdown(false);
  //   } else {
  //     setDropdown(false);
  //   }
  // };
  const [color, setColor]=useState(false)
    const changeColor = ()=>{
        if (window.scrollY>=10){
            setColor(true)
        }
        else{
            setColor(false)
        }
    }

    window.addEventListener('scroll', changeColor)


  return (
    <div >
        <nav className= {color?'navbar sticky nav-bg1' :'navbar sticky nav-bg2'}>




            <Link to='/Dashboard' className='navbar-logo' onClick={closeMobileMenu}>
              {/* EPIC
              <i class='fab fa-firstdraft' /> */}
                    <img src={logo} alt='' className='log-img fab fa-firstdraft'/>
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <div className='hi'>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item li1'>
                <Link to='/Dashboard' className='nav-links' onClick={closeMobileMenu}>
                <AiOutlineDashboard />
                &nbsp;
                Dashboard
                </Link>
              </li>
              <li className='nav-item li2'>
              <Link
                  to='/GcpInterface'
                  className='nav-links'
                  onClick={closeMobileMenu}
                ><AiOutlineEnvironment />
                &nbsp;
                  Gcp Interface
                </Link>
              </li>
              <li className='nav-item li3'>
                <Link
                  to='/ProfileSetup'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                <BsLightning />
                &nbsp;
                  Profile Setup
                </Link>
              </li>
              
              <li className='nav-item li4'>
                
                <Link
                  to='/Diagnostic'
                  className='nav-links'
                  onClick={closeMobileMenu}>
                  <AiFillPieChart />
                  &nbsp;
                  Diagnostic
                </Link>
              </li>
              {/* <li className='nav-item li5'>
                <Link
                  to='/ProcessingNodes'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                <VscTools />
                &nbsp;
                  Processing Nodes
                </Link>
              </li> */}

           
              <li className='nav-item li6'>
                <Link
                  to='/AdministrationProfile'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                <AiFillSetting />
                &nbsp;
                  Administration 
                </Link>
              </li>
            {/* ////////////////////////////////////////////////////////////////         */}
              

              <li className='nav-item li7'>
                <Link
                  to='/About'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                <AiFillInfoCircle />
                &nbsp;
              About
              </Link>
              </li>
              {/* <li>
                <Link
                  to='/sign-In'
                  className='nav-links-mobile'
                  onClick={closeMobileMenu}
                >
                  Sign In
                </Link>
              </li> */}


          <li className='li8' >
            <Link
              to='/About'
              className='nav-links1'
              onClick={closeMobileMenu}
            >
          
          <Button className='nav-Button'  />
          </Link>
          </li>
          <li>
            <Link
              to='/sign-In'
              className='nav-links-mobile'
              onClick={closeMobileMenu}
            >
              Sign In
            </Link>
          </li>
          <li>
          
          </li>
        </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
