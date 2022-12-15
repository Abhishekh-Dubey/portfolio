
// import React from 'react';
import './Dashboard.css';



import {Map, InfoWindow, GoogleApiWrapper} from 'google-maps-react';
import React,{Component} from 'react'
 
export class Dashboard extends Component {

  
  render() {
    const style = {
      maxWidth: "100vw",
      height: "92.5vh",
      overflowX: "hidden",
      overflowY: "hidden"
     };
     const containerStyle = {
      maxWidth: "100vw",
      height: "92.5vh"
     };
    
    return ( <div >
    <div className='DashboardContainer'>
      <Map  google={this.props.google} zoom={3} style={style} containerStyle={containerStyle}>
 
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
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCOVQtuxDcmKHMnMSemdh1oABroS9L83Lo')
})(Dashboard)