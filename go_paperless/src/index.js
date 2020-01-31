import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import List from './lists';
import Notice from './notice';

const routing = (
    <Router>
        <div>
            <Route path="/" component={App} />
            <Route path="/documents" component={List} />
            <Route path="/notice" component={Notice} />
        </div>
    </Router>
)

ReactDOM.render(
    routing, document.getElementById('root'));

serviceWorker.unregister();
