import './assets/css/reset.less';
import 'lib-flexible/flexible.js'
import React from 'react';
import ReactDOM from 'react-dom';
import http from './common/http/http'
import api from './common/http/api'
import './common/mock/mock';
import { Route, HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import App from './pages/App';
import Loading from './components/Loading/Loading';
// store.subscribe(() =>{
//     console.log(store.getState())
// });
// store.dispatch(loadingState(true));
window.$http = http
window.$api = api
const routes = (
    <Provider store={store}>
        <div className="index router-view">
        <Loading></Loading>
        <Router>
            <Route path='/' component={App} />
        </Router>
        </div>
    </Provider>
)
ReactDOM.render(
    routes,
    document.getElementById('app')
);