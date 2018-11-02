import React, { Component } from 'react';
import ReacterFragment from 'react';
class DummyCompo extends Component {


    render() {
        
        return (
            <div>
                <label>Add New Employee&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="addEmp" ></input>
                    <button className = "badge" onClick={() => {this.props.addEmp();}}> Add New Employee</button>
                </label>
            </div>
        );
    }
}
export default DummyCompo;
