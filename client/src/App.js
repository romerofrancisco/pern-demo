import React, {Fragment} from 'react';
import './App.css';

//components
import SearchEmployee from './components/SearchEmployee';
import ListEmployees from './components/ListEmployees';

function App() {
  return (
    <Fragment>
      <div className='container'>
        <SearchEmployee />
      </div>
    </Fragment>
  );
}

export default App;
