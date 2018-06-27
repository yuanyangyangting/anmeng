import React from 'react';
import { Link } from 'react-router-dom'
import Tab from '../../components/Tab/Tab.jsx'
import Search from '../../components/Search/Search.jsx'
import Scroller from '../../components/Scroller/Scroller.jsx'
import './myOrder.less'
const tabList = [
  { title: '待支付' },
  { title: '支付中' },
  { title: '支付失败' },
  { title: '已取消' },
  { title: '已完成' },
]
class MyOrder extends React.Component {
  constructor() {
    super()
    this.state = {
      active: 0,
      orderList: [],
      page: 1,
      screen: '',
      scrollHeight: 0
    }
  }
  componentDidMount() {
    let height = this.refs.order.offsetHeight;
    this.setState({
      scrollHeight: height
    }, () => {
      this.getData(1);
    })

    // console.log()
  }
  tabActive(key) {
    this.setState({
      active: key,
      ...this.stateInit()
    }, () => {
      this.getData(1, () => {
        this.refs.scroller.reSet()
      })
    })
  }
  stateInit() {
    return {
      orderList: [],
      page: 1,
      screen: ''
    }
  }
  onScrollToBottom() {
    console.log('加载更多')
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getData(this.state.page);
    })
  }
  search(value) {
    console.log(value)
  }
  getData(page = 1, cb = () => { }) {
    let data = { page: page, orderType: this.state.active + 1, screen: this.state.screen };
    window.$http(window.$api.orderList, data).then(res => {
      if (!res.data.data.orderList.length) {
        this.setState({
          page: this.state.page > 1 ? this.state.page - 1 : 1
        })
      }
      this.setState({
        orderList: page <= 1 ? res.data.data.orderList : this.state.orderList.concat(res.data.data.orderList)
      }, () => { cb(res) })
    })
  }
  render() {
    return (
      <div className="order router-view">
        <div className="order-top">
          <div className="order-search">
            <Search search={this.search.bind(this)} placeholder="请输入姓名、手机号"></Search>
          </div>
          <div className="order-tab">
            <Tab tabList={tabList} active={this.state.active} tabChange={this.tabActive.bind(this)}></Tab>
          </div>
        </div>
        <div className="order-list" ref="order">
          <Scroller height={this.state.scrollHeight} ref='scroller' onScrollToBottom={this.onScrollToBottom.bind(this)}>
            <div className="order-scroller">
              <ul className="order-card">
                {this.state.orderList.map((item, index) => (
                  <OrderCard item={item} key={index} />
                ))}
              </ul>
            </div>
          </Scroller>
        </div>
      </div>
    )
  }
}
const OrderCard = (props) => {
  let { item } = props
  return (
    <li className="order-card--item">
      <div slot="content" className="order-card">
        <a>
          <div className="card--item__left">
            <div className="item--left__top">
              <div className="item--info">
                <h3>{item.prodName}</h3>
                <p>{item.orderTime}</p>
              </div>
              <div className="item--username">
                <p>{item.policyHolder}</p>
              </div>
            </div>
            <div className="item--left__bottom">
              <div className="item--date">
                <p>{item.startDate} - {item.endDate}</p>
              </div>
              <div className="item--prize">
                <p>{item.premium}元</p>
              </div>
            </div>
          </div>
          <div className="card--item__right">
            <i className="iconfont icon-right"></i>
          </div>
        </a>
      </div>
    </li>
  )
}
export default MyOrder