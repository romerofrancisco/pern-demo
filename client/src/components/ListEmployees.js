import React, { Fragment, useEffect, useState } from 'react';
import moment from 'moment';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import * as ReactBootStrap from 'react-bootstrap';

const ListEmployees = (props) => {
    const [employees, setEmployees] = useState([]);
    const [loading, setLoading] = useState(false);

    const getEmployees = async (employee) => {
        try {
            if (employee && employee !== '') {
                setEmployees([employee]);
            } else {
                const response = await fetch('/report');
                const jsonData = await response.json();
                setEmployees(jsonData);
            }
            setLoading(true);
        } catch (err) {
            console.error(err.message)
        }
    };

    useEffect(() => {
        getEmployees(props.filteredEmployee);
    }, [props]);

    const columns = [ 
        {dataField: 'employee_id', text: 'ID'},
        {dataField: 'first_name', text: 'First Name'},
        {dataField: 'last_name', text: 'Last Name'},
        {dataField: 'email', text: 'Email'},
        {dataField: 'hire_date', text: 'Hired Date'},
        {dataField: 'department', text: 'Department'},
        {dataField: 'salary', text: 'Salary'}
    ]

    return (
        <Fragment>
            <div className='App table mt-5 table-striped table-hover table-sm'>
            {loading ? (
                <BootstrapTable
                    keyField='employee_id'
                    data={employees}
                    columns={columns}
                    pagination={paginationFactory()}
                />):(
                    <ReactBootStrap.Spinner animation='border'/>
                )
            }
            </div>
            {/* {' '}
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
                    {
                        employees.map(employee => (
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
            </table> */}
        </Fragment>
    )
};

export default ListEmployees