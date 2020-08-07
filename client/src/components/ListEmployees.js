import React, { Fragment, useEffect, useState } from 'react';

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

    console.log(employees)

    return (
        <Fragment>
        {' '}
        <table className="table table-dark table-striped mt-5 text-center">
            <thead>
                <tr>
                    <th>ID</th>  
                    <th>Firstname</th>
                    <th>Lastname</th>
                    <th>Email</th>
                    <th>Hired Date</th>
                    <th>Department</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {/*
                <tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr>
                */}
            </tbody>
        </table>
    </Fragment>
    )
};

export default ListEmployees