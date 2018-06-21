import React from 'react';
import './allproduct.less'
import Tab from '../../components/Tab/Tab'
import Scroller from '../../components/Scroller/Scroller'
const tabList = [
  {title:'热销'},
  {title:'全部'},
  {title:'意外'},
  {title:'旅游'},
  {title:'财产'}
]
class AllProduct extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      active:0
    }
  }
  tabActive(index){
    this.setState({
      active:index
    })
  }
  render () {
    return(
      <div className="product">
      <div className="product-tab">
      <Tab tabList={tabList} active={this.state.active} tabChange = {this.tabActive.bind(this)}></Tab>
      </div>
      <div className="product-list" ref="product">

      </div>
    </div>
  )
  }
}
export default AllProduct