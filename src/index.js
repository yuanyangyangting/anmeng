import './assets/css/reset.less';
import 'lib-flexible/flexible.js'
import React from 'react';
import ReactDOM from 'react-dom';
import http from './common/http/http'
import api from './common/http/api'
import './common/mock/mock';
import { Route, HashRouter as Router , Switch, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux'; 
import store from './redux/store';
import Loading from './components/Loading/Loading';
import App from './pages/App';
import allproduct from './pages/AllProduct/allproduct';
// import initReactFastclick from 'react-fastclick';
// initReactFastclick();

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
            <Switch>
                <Route path='/allproduct' component={allproduct} />
                <Route path='/' component={App} />
                <Redirect to="/home" />
            </Switch>
        </Router>
        </div>
    </Provider>
)
ReactDOM.render(
    routes,
    document.getElementById('app')
);