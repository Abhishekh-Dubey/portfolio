import React from 'react';
import Navbar from './components/Navbar';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { BrowserRouter} from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import Administration from './components/pages/Administration';
import Diagnostic from './components/pages/Diagnostic';
import ProfileSetup from './components/pages/ProfileSetup';
import GcpInterface from './components/pages/GcpInterface';
import ProcessingNodes from './components/pages/ProcessingNodes';
import About from './components/pages/About';
import SignIn from './components/pages/SignIn';
import SignUp from './components/pages/SignUp';
import GeneralProfile from './components/pages1/Administration-Profile-Pages/GeneralProfile';
import SecurityandLoginSetting from './components/pages1/Administration-Profile-Pages/SecurityandLoginSetting';
import LanguageandRegionSetting from './components/pages1/Administration-Profile-Pages/LanguageandRegionSetting';
import BarChat from './components/pages1/Administration-Profile-Pages/BarChat';
import Forgot from './components/pages/Forgot';
import Otp from './components/pages/Otp';
import Popup from './components/pages/Popup';
import  ResetPassword from './components/pages/ResetPassword';

import AdministrationProfile from './components/pages1/Administration-Profile.js';

import Group from './components/pages1/Group.js';
import Brand from './components/pages1/Brand.js';
import Theme from './components/pages1/Theme.js';
import Plugimnes from './components/pages1/Plugimnes.js';

import Application from './components/pages1/Application.js';
import DropFileInput from './components/pages/DropFileInput.js';

function App() {
  return (
    <BrowserRouter>
    <Router>
      <Navbar />
      <Switch>
      <Route path='/' exact component={Dashboard} />
        <Route path='/Dashboard' exact component={Dashboard} />
        <Route path='/Diagnostic' component={Diagnostic} />
        <Route path='/ProfileSetup' component={ProfileSetup} />
        <Route path='/GcpInterface' component={GcpInterface} />
        <Route path='/ProcessingNodes' component={ProcessingNodes} />     
        <Route path='/About' component={About} />


       

        <Route path='/sign-In' component={SignIn} />
        <Route path='/SignUp' component={SignUp} />
        <Route path='/Forgot' component={Forgot} />
        <Route path='/Otp' component={Otp} />
        <Route path='/ResetPassword' component={ResetPassword} />
        
        <Route path='/DropFileInput' component={DropFileInput} />
        
        <Route path='/Administration' component={Administration} />
        <Administration>
        
        <Route path='/AdministrationProfile' component={AdministrationProfile} />
        <Route path="/Group" component={Group} />
        <Route path="/Brand" component={Brand} />
        <Route path="/Theme" component={Theme} />
        <Route path="/Plugimnes" component={Plugimnes} />
        <Route path="/Application" component={Application } />

        <Route path='/GeneralProfile' component={GeneralProfile} />
        <Route path='/SecurityandLoginSetting' component={SecurityandLoginSetting} />
        <Route path='/LanguageandRegionSetting' component={LanguageandRegionSetting} />
        <Route path='/BarChat' component={BarChat} />
        </Administration>
       
       
        <Route path='/Popup' component={Popup} />
       
      </Switch>
     
    </Router>
    </BrowserRouter>
    
  );
}

export default App;
