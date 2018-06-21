import React from 'react';
import Home from './Home/home.js';
import myOrder from './MyOrder/myorder.js';
import userCenter from './UserCenter/usercenter.js';
import NavBar from '../components/Navbar/nav'
import {Route, Redirect, Switch} from 'react-router-dom'
// import { connect } from 'react-redux'

// import PropTypes from 'prop-types';

let navList = [
    {title:'首页',url:'/home'},
    {title:'订单',url:'/myOrder'},
    {title:'我的',url:'/userCenter'},
]
class App extends React.Component{
  constructor(props){
      super(props)
      this.state={
          path:'/home'
      };
  }
  setPath(path){
    this.setState({
        path:path
    })
  }
  componentWillReceiveProps(props){
    this.setPath(props.location.pathname)
  }
  componentWillMount(){
    this.setPath(this.props.location.pathname)
  }
  render(){
      return(
        <div className="page">
            <div className="page-view">
            <Switch>
                <Route path="/home" component={Home}></Route>
                <Route path="/myOrder" component={myOrder}></Route>
                <Route path="/userCenter" component={userCenter}></Route>
            </Switch>
            </div>
            <NavBar active={this.state.path} navList={navList}></NavBar>
        </div>
      )
  }
}
export default App;