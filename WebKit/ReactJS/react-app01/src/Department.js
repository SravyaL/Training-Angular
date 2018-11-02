import React, { Component } from 'react';
import './Department.css';
class Department extends Component{
    render(){
        return(
            <span className="col3" onClick={this.props.changeDept}>{this.props.value}</span>
        );
    }
}

export default Department;