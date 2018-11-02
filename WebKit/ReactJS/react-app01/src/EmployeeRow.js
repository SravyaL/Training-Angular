import React,{Component} from 'react';

class EmployeeRow extends Component{
    render(){
        let empStyle={
            backgroundColor: '#ffffff',
            align: 'center',
            //textalign: 'center'
        }
        return(
            <tr style={empStyle}>
                <td>{Number(this.props.e.eid).toFixed(0)}</td>
                <td>{String(this.props.e.ename).toUpperCase()}</td>
                <td>{this.props.e.gender}</td>
                <td> <span>&#8377;</span> {Number(this.props.e.basic).toFixed(2)}</td>
                <td>{(this.props.e.hra)*100}%</td>
                <td>{String(this.props.e.edept).charAt(0).toUpperCase()+String(this.props.e.edept).substr(1).toLowerCase()}</td>
            </tr>
        );
    }
}

export default EmployeeRow;