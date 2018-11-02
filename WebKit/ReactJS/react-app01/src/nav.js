import React, {Component} from 'react';
import './nav.css';
import DummyCompo from './DummyCompo.js';
class NavBar extends Component{
    render(){
        return(
           
            <div className="bg">
            <a href="">Home</a>
            <button className="badge" onClick={() => <DummyCompo addContact={this.props.addContact()} />}> New Contact</button>
            </div>
        );
    }
}


export default NavBar;