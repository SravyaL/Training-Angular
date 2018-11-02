import React, { Component } from 'react';
import ReacterFragment from 'react';
import './DummyCompo.css';
class DummyCompo extends Component {


    render() {

        return (
            <div>


                <label> Title:
                <select id="contTitle" required>
                        <option value=''></option>
                        <option value="Miss">Miss</option>
                        <option value="Mrs">Mrs</option>
                        <option value="Mr">Mr</option>
                        <option value="Dr.">Dr.</option>
                        <option value="Prof">Prof</option>

                    </select>
                </label>
                <label > First Name:
                    <input type="text" id="contFName" placeholder="First Name" ></input></label>
                <label> Last Name:
                    <input type="text" id="contLName" placeholder="Last Name"  ></input></label>
                <label> Primary Mobile Number:
                    <input type="number" id="contPMno" placeholder="Primary Mobile Number" ></input></label>
                <label> Alternate Mobile Number:
                    <input type="number" id="contAMno" placeholder="Alternate Mobile Number" ></input></label>
                <label> Email:
                    <input type="email" id="contEmail" placeholder="Email"  ></input></label>
                <label> Gender:
                    <input type="text" id="contGender" placeholder="Gent/Lady"  ></input></label>
                <button className="badge" onClick={() => { this.props.addContact(); }}> Add New Contact</button>

            </div>
        );
    }
}
export default DummyCompo;
