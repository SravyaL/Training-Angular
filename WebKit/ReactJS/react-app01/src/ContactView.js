import React, { Component } from 'react';
import './ContactView.css';
class ContactView extends Component {
    render() {
        const gender='Lady';
        const cont = this.props.cont;
        return (
            <div className="contView">
            
            
              
                <span className="col1">{cont.title}</span>
                <span className="col2">{String(cont.fname).charAt(0).toUpperCase()}{String(cont.fname).slice(1)}</span>
                <span className="col2">{cont.lname}</span>
                <span className="col1">{cont.pmno}</span>
                <span className="col2">{cont.amno}</span>
                <span className="col1">{cont.email}</span>
                <span className="col2">{cont.gender}</span>




            </div>

        );
    }
}

export default ContactView;