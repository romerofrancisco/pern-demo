import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';

const ListEmployees = () => {
    const [employees, setEmployees] = useState([]);
    
    const getEmployees = async() => {
        try {
            const response = await fetch('http://localhost:5000/report');
            const jsonData = await response.json();

            setEmployees(jsonData);
            
        } catch (err) {
            console.error(err.message)
        }
    };
    
    useEffect(() => {
        getEmployees();
    }, []); //the empty array makes useEffect send only 1 request

    return (
        <Fragment>
        {' '}
        <table className="table table-dark table-striped mt-5 text-center">
            <thead>
                <tr>
                    <th>ID</th>  
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Hire Date</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map(employee => (
                    <tr key={employee.employee_id}>
                        <td>{employee.employee_id}</td>
                        <td>{employee.first_name}</td>
                        <td>{employee.last_name}</td>
                        <td>{employee.email}</td>
                        <td>{moment(employee.hire_date).format('DD/MM/YYYY')}</td>
                        <td>{employee.department}</td>
                        <td>{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(employee.salary)}</td>
                    </tr>          
                ))}
            </tbody>
        </table>
    </Fragment>
    )
};

export default ListEmployees