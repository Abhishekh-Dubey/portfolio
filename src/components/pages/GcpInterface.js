
// import React from 'react';
import '../../App.css';
import './GcpInterface.css'
import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'
import { Link } from 'react-router-dom';
import {FaTh}from "react-icons/fa"
import DropFileInput from './DropFileInput'
 
export class GcpInterface extends Component {
  render() {
  
    
    return ( <>
    <div className='flex-container'>
    <div className=' flex-item-left'>
    <div className='HeaderText'> Ground Control Point Interface </div>
    <div className=' BackgroundText'>
    <div className='Text1' >GROUND CONTROL POINTS</div>
    <div className='cant123 flex-container1'>
      <div className='MenuImage BackgroundText flex-item-left1'>
                <Link
                  to='/About'
                  className='nav-links'
                  // onClick={closeMobileMenu}
                >
                <FaTh />
                &nbsp;
              
              </Link>
              
      </div>
      <div className='Text1 Text2 BackgroundText flex-item-right1'>No Point...</div>
      <div className='DragAndDropOuterContainer'>
      <div className='DragAndDropInnerContainer'>
      
      <DropFileInput />
      
      </div>
      </div>
      </div>
      </div>
    </div>








      <div className=' flex-item-right'>
      <Map className='Map containerStyle'  google={this.props.google} zoom={2.2} >
 
 
        {/* <Marker onClick={this.onMarkerClick}
                name={'Current location'} /> */}
 
        <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
        </InfoWindow>
      </Map>
      </div>

      </div>
      </>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCOVQtuxDcmKHMnMSemdh1oABroS9L83Lo')
})(GcpInterface)