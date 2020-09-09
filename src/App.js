import React, { Component } from 'react';
import { BrowserRouter as Router,  Route } from 'react-router-dom';
import Login from './components/Login';
import MyNetwork from './components/MyNetwork';
import Messaging from './components/Messaging';
import './App.css';
import Demo from './components/popup';
import Home from './components/Home'

class App extends Component {
    render() {  
        return (
            <div>
                <Router>
                    <Route path='/home' exact component={Home}/>
                    <Route path="/login" exact  component={Login}/> 
                    <Route path="/mynetwork" component={MyNetwork} />
                    <Route path="/messaging" component={Messaging} />
                    <Route path='/demo' component={Demo} />

                </Router>
            </div>
        );
    }
}
export default App;