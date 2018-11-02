import React, {Component} from 'react';
import EmployeeRow from './EmployeeRow.js';


class Employee extends Component{
    render(){
        let tabStyle = {
            backgroundColor: '#91F0F0',
            //fontStyle: 'italic',
            width: '100%',
            
          };
        return(
            <table style={tabStyle}>
                <tr>
                    <th>Employee ID#</th>
                    <th>Employee Name</th>
                    <th>Gender</th>
                    <th>Basic </th>
                    <th>HRA</th>
                    <th>Department</th>
                </tr>
                {
                    this.props.emps.map(
                        (emp,ind) =>
                        <EmployeeRow key={ind} e={emp} />
                    )
                }  
            
            </table>
        );
    }
}

export default Employee;