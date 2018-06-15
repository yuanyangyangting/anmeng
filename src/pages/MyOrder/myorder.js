import React from 'react';
import {Link} from 'react-router-dom'
import Tab from '../../components/Tab/Tab'
import Search from '../../components/Search/Search'
import './myOrder.less'
const tabList = [
  {title:'待支付'},
  {title:'支付中'},
  {title:'支付失败'},
  {title:'已取消'},
  {title:'已完成'},
]
class MyOrder extends React.Component{
  constructor(){
    super()
    this.state = {
      active:0
    }
  }
  componentDidMount(){

  }
  tabActive(key){
    this.setState({
      active:key
    })
  }
  search(value){
    console.log(value)
  }
  render(){
    return (
      <div className="order router-view">
      <div className="order-search">
        <Search search={this.search.bind(this)} placeholder="请输入姓名、手机号"></Search>
      </div>
        <div className="order-tab">
        <Tab tabList={tabList} active={this.state.active} tabChange = {this.tabActive.bind(this)}></Tab>
        </div>
        <div className="order-list" ref="order">
        
        </div>
      </div>
    )
  }
}
  export default MyOrder