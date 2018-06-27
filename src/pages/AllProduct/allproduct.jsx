import React from 'react';
import './allproduct.less'
import Tab from '../../components/Tab/Tab.jsx'
import PropTypes from 'prop-types'
import { setActive } from '../../redux/action'
import { connect } from 'react-redux'
import Scroller from '../../components/Scroller/Scroller.jsx'
const tabList = [
  { title: '热销' },
  { title: '全部' },
  { title: '意外' },
  { title: '旅游' },
  { title: '财产' }
]
class AllProduct extends React.Component {
  constructor(props) {
    super(props)
    console.log(props)
    this.state = {
      active: 0,
      prodList:[],
      page:1
    }
  }
  componentDidMount() {
    let active = this.props.active;
    let height = this.refs.product.offsetHeight;
    this.setState({
      scrollHeight: height,
      active: active
    },()=>{
      this.getData({ pageNo: 1 })
    })
  }
  tabActive(key) {
    this.props.setActive(key);
    this.setState({
      active: key,
      ...this.stateInit()
    }, () => {
      this.getData({pageNo:1}, () => {
        this.refs.scroller.reSet()
      })
    })
  }
  onScrollToBottom() {
    console.log('加载更多')
    this.setState({
      page: this.state.page + 1
    }, () => {
      this.getData({pageNo:this.state.page});
    })
  }
  stateInit() {
    return {
      prodList:[],
      page:1
    }
  }
  getData(data, cb = () => { }) {
    let tag = this.state.active; // 分类
    data['prodType'] = tag; // 添加到data
    data['state'] = 1;
    // data['userId'] = this.userId;
    window.$http(window.$api.getProduct, data).then(res => {
      let prodList = res.data.data.prodList;
      if (!prodList.length) {
        this.setState({
          page: this.state.page > 1 ? this.state.page - 1 : 1
        })
      }
      let arr = this.state.productList;
      this.setState({
        prodList:data.pageNo <= 1?prodList:this.state.prodList.concat(prodList)
      })
      cb(res)
    })
  }

  render() {
    return (
      <div className="product">
        <div className="product-tab">
          <Tab tabList={tabList} active={this.state.active} tabChange={this.tabActive.bind(this)}></Tab>
        </div>
        <div className="product-list" ref="product">
          <Scroller height={this.state.scrollHeight} ref='scroller' onScrollToBottom={this.onScrollToBottom.bind(this)}>
            <div className="product-scroller">
              <ul className="product-card">
                {this.state.prodList.map(item=>(<ProductList item={item} key={item.prodCode}></ProductList>))}
              </ul>
            </div>
          </Scroller>
        </div>
      </div>
    )
  }
}

const ProductList = (props) => {
  let item = props.item
  return (
    <li className="product-card--item" v-for="item in productList">
      <div className="product-card--item__left" style={{ backgroundImage: `url(${item.prodUrl})` }}></div>
      <div className="product-card--item__center">
        <div className="title">
          <h3 className="ov_1">{item.prodName}</h3>
          <p className="ov_1">{item.prodPropaganda}</p>
        </div>
        <div className="prize">
          <p>{item.prodPrice}</p>
        </div>
      </div>
      <div className="product-card--item__right">
        <i className="iconfont icon-right"></i>
      </div>
    </li>
  )
}
AllProduct.contextTypes = { store: PropTypes.object.isRequired }
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setActive: (key) => dispatch(setActive(key)),
  }
};
export default connect((state)=>({...state}),mapDispatchToProps)(AllProduct)