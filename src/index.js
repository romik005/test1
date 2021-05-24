import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'


// import $ from 'jquery';
import App from './App';

import Header from './views/header.jsx';
import Modul from './views/componets/careermodul.jsx';

ReactDOM.render(
    <React.Fragment >
        <BrowserRouter >
            <Header />
            <div id="testing" >
                <div classname="container" style={{ padding: 0, width: '100%' }} >
                    <App />
                </div>
            </div>
        </BrowserRouter>
    </ React.Fragment >,
    document.getElementById('root')
);

ReactDOM.render(
    <React.Fragment >
        <Modul />
    </ React.Fragment >,
    document.getElementById('moduleopen')
);