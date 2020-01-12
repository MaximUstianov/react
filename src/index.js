import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './About';
import registerServiceWorker from './registerServiceWorker';
import {Route, BrowserRouter} from 'react-router-dom';





ReactDOM.render(<BrowserRouter>
        <Route path="/" exact component={App}/>
        <Route path="/about" component={About}/>
    </BrowserRouter>
    , document.getElementById('root'));
registerServiceWorker();
