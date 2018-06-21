import React from 'react';
import Home from './Home/home.jsx';
import myOrder from './MyOrder/myorder.jsx';
import userCenter from './UserCenter/usercenter.jsx';
import NavBar from '../components/Navbar/nav.jsx'
import { Route, Redirect, Switch } from 'react-router-dom'
// import { connect } from 'react-redux'

// import PropTypes from 'prop-types';

let navList = [
    { title: '首页', url: '/home' },
    { title: '订单', url: '/myOrder' },
    { title: '我的', url: '/userCenter' },
]
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            path: '/home'
        };
    }
    setPath(path) {
        this.setState({
            path: path
        })
    }
    componentWillReceiveProps(props) {
        this.setPath(props.location.pathname)
    }
    componentWillMount() {
        this.setPath(this.props.location.pathname)
    }
    render() {
        return (
            <div className="page">
                <div className="page-view">
                    <Switch>
                        <Route path="/home" component={Home}></Route>
                        <Route path="/myOrder" component={myOrder}></Route>
                        <Route path="/userCenter" component={userCenter}></Route>
                        <Redirect to="/home" />
                    </Switch>
                </div>
                <NavBar active={this.state.path} navList={navList}></NavBar>
            </div>
        )
    }
}
export default App;