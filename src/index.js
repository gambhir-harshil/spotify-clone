import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { DataLayer } from './DataLayer';
import reducer, { initialState } from './reducer';

ReactDOM.render(
    <DataLayer initialState={initialState} reducer={reducer} >
        <App/>
    </DataLayer>
    ,
     document.getElementById('root')
);