import './assets/css/reset.less';
import 'lib-flexible/flexible.js'
import React from 'react';
import ReactDOM from 'react-dom';
import http from './common/http/http'
import api from './common/http/api'
import './common/mock/mock';
import { Route, HashRouter as Router, Link } from 'react-router-dom';
window.$http = http
window.$api = api
import App from './pages/App';
const routes = (
    <div className="index router-view">
        <Router>
                <Route path='/' component={App} />
        </Router>
    </div>
)
ReactDOM.render(
    routes,
    document.getElementById('app')
);