import React, {Fragment, useState} from 'react';

const SearchEmployee = () => {
    const [filter, setFilter] = useState('');

    const onSubmitForm = async e => {
        e.preventDefault();
        try {
            const id = { filter };
            const response = await fetch(`http://localhost:5000/report/${id.filter}`);
            //console.log(await response.text());
            window.location = '/';
        } catch (err) {
            console.error(err);
        };
    };

    return (
        <Fragment>
            <h1 className='text-center mt-5'>Employees</h1>
            <form className='d-flex mt-5' onSubmit={onSubmitForm}>
                <input type='text' className='form-control' value={filter} onChange={e => setFilter(e.target.value)} />
                <button className='btn btn-success'>Filter</button>
            </form>
        </Fragment>
    );
};

export default SearchEmployee;