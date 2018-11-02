import React, { Component } from 'react';
import './PriorityBox.css';
class PriorityBox extends Component{
    render(){
        return(
            <span className="col3" onClick={this.props.changePriority}>{this.props.value}</span>
        );
    }
}

export default PriorityBox;