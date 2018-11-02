import React, { Component } from 'react';
import ReacterFragment from 'react';
class DummyCompo extends Component {


    render() {
        
        return (
            <div>
                <label>Add New Task&nbsp;&nbsp;&nbsp;&nbsp;
                    <input type="text" id="addtask" ></input>
                    <button className = "badge" onClick={() => {this.props.addTask();}}> Add New Task</button>
                </label>
            </div>
        );
    }
}
export default DummyCompo;
