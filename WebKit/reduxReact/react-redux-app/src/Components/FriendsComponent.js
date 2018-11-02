import React, { Component } from 'react';

export default class FriendsApp extends Component{
 
    render(){
        return(
            <div>
                <ol>
                    {this.props.frds.map(
                        (frd,i) => <li key={i}>{frd}</li>
                    )}
                </ol>
            </div>
        );
    }
}