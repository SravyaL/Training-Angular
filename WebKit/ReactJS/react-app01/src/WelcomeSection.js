import React, {Component} from 'react';
class WelcomeSection extends Component{
    render(){
        let welcomeStyle = {
            backgroundColor : '#ffffff',
            fontStyle:'italic'
        };
        return( 
            <section style={welcomeStyle}>
            <h2> Hello! {this.props.userName}</h2>
            </section>
        );
    }
}

export default WelcomeSection;