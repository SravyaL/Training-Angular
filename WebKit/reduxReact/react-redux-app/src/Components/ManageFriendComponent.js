import React, { Component } from 'react';

export default class ManageFriendsApp extends Component{
 
    render(){
        return(
            <div>
                <input type="text" id="txtFrdName"/>
                <button> Add Friend </button>
                <button>Delete Friend </button>
            </div>
        );
    }
}