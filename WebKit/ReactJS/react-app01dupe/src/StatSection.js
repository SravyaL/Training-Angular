
import React,{ Component } from 'react';

class StatSection extends Component{    
    render(){        
        let statStyle = {            
            backgroundColor: '#ffffff',            
            fontStyle: 'italic'          
        };        
        return(            
        <section style={statStyle}>          
        <table>            
            <tr><td>Height:</td><td>{this.props.usrStat.height}</td></tr>            
            <tr><td>Weight:</td><td>{this.props.usrStat.weight}</td></tr>            
            <tr><td>Nationality:</td><td>{this.props.usrStat.nationality}</td></tr>            
            <tr><td>Blood Group:</td><td>{this.props.usrStat.bloodGroup}</td></tr>          
            </table>        
            </section>        
            );    
        }}
        
export default StatSection;
