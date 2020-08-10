import React, { Fragment, useState } from 'react';
import ListEmployees from './ListEmployees'


const SearchEmployee = () => {
    //const [filter, setFilter] = useState('');
    const [result, setResult] = useState('');

    const onSubmitForm = async e => {
        const textEl = document.querySelector('#filterText').value;
        e.preventDefault();
        try {
            if (textEl !== '') {
                const response = await fetch(`/report/${textEl}`);
                setResult(await response.json())
            } else {
                setResult('')
            }
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Employees</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <label htmlFor='filterText' className="mr-3 col-form-label">ID:</label>
                <input id="filterText" type='text' className='form-control col-sm-3 '/>
                <button className='btn btn-success ml-3'>Filter</button>
            </form>
            <ListEmployees filteredEmployee={result} />
        </Fragment>
    );
};

export default SearchEmployee;