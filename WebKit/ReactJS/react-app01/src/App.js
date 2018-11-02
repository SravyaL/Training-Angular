import React, { Component } from 'react';
import Header from './Header.js';
import Footer from './Footer.js';

import ReactDom from 'react-dom';
import DummyCompo from './DummyCompo.js'

//import logo from './logo.svg';
import './App.css';
import NavBar from './nav.js';
import ContactView from './ContactView.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      contacts: [
        { title: 'Miss', fname: 'Sravya', lname: 'Lenka', pmno: '987654321', amno: '1234567890', email: 'sravya@verizon.com', gender: 'Lady' },
        { title: 'Miss', fname: 'Mayukha', lname: 'Avasarala', pmno: '987654321', amno: '1241451234', email: 'mayukha@verizon.com', gender: 'Lady' }
      ],
      contReport: {
        gents: 0,
        ladies: 2
      },

    };
    this._onButtonClick = this._onButtonClick.bind(this);
  }
  _onButtonClick() {
    this.setState({
      showComponent: true,
    });
  }
  addContact() {
    let cTitle = ReactDom.findDOMNode(document.getElementById("contTitle"));
    let cFName = ReactDom.findDOMNode(document.getElementById("contFName"));
    let cLName = ReactDom.findDOMNode(document.getElementById("contLName"));
    let cPMno = ReactDom.findDOMNode(document.getElementById("contPMno"));
    let cAMno = ReactDom.findDOMNode(document.getElementById("contAMno"));
    let cEmail = ReactDom.findDOMNode(document.getElementById("contEmail"));
    let cGender = ReactDom.findDOMNode(document.getElementById("contGender"));
    if (cAMno.value != '') {
      var str = cAMno.value;
      if (str.length != 10) {
        alert("Alternate Mobile number should be 10 digits");
      }

    }

    else if (cTitle.value == '') {
      alert("Title can't be null");
    }
    else if (cFName.value == '') {
      alert("First Name can't be null");
    }
    else if (cLName.value == '') {
      alert("Last Name can't be null");
    }
    else if (cPMno.value.length != 10) {
      alert("Mobile number should be 10 digits");
    }
    else if ((cGender.value != 'Lady') && (cGender.value != 'Gent')) {
      alert("Gender can be Lady or Gent.");
    }
    else if (!(cEmail.value.indexOf('@'))) {
      alert("Email should contain '@'");
    }
    else {
      let modifiedcontacts = this.state.contacts;
      let modifiedContReport = this.state.contReport;

      modifiedcontacts[this.state.contacts.length] = {
        title: cTitle.value,
        fname: cFName.value,
        lname: cLName.value,
        pmno: cPMno.value,

        amno: str,
        email: cEmail.value,
        gender: cGender.value
      }




      if (cGender.value == "Lady")
        modifiedContReport.ladies++;
      else
        modifiedContReport.gents++;
      this.setState({ contacts: modifiedcontacts });

      this.setState({ contReport: modifiedContReport });

      cTitle.value = "";

      cPMno.value = "";
      cFName.value = "";
      cLName.value = "";
      cGender.value = "";
      cEmail.value = "";
    }
  }
  render() {
    const contReport = this.state.contReport;

    return (
      <React.Fragment>
        <Header />

        <nav>
          <a href="App.js">Home</a>

          <button className='badge' onClick={this._onButtonClick}>Add Contact </button>
          {this.state.showComponent ?
            <DummyCompo addContact={this.addContact.bind(this)} /> :
            null
          }


        </nav>

        <div>
          <span className="badge"> Gents: {contReport.gents}</span>
          <span className="badge"> Ladies: {contReport.ladies}</span>
        </div>
        {
          this.state.contacts.map(
            (cont, i) =>
              <ContactView cont={cont} key={i}
              />
          )


        }


        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
