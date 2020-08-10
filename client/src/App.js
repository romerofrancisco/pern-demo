import React, {Fragment} from 'react';
import './App.css';

//components
import SearchEmployee from './components/SearchEmployee';

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
