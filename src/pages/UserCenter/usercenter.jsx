import React from 'react';
import './usercenter.less'
import { List } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isPop: false,
      userInfo: {},
      workInfo: {}
    }
  }
  componentDidMount() {
    this.getDate()
  }
  getDate() {
    window.$http(window.$api.userCenter, {}).then(res => {
      this.setState({
        userInfo: res.data.data
      })
    })
  }
  render() {
    return (
      <div className="user-center">
        <div className="user-info">
          <div className="user-info--head" style={{ backgroundImage: 'url(' + this.state.userInfo.headimage || null + ')' }}>
            {/* <input type="file" ref="headImg" name="headimage" accept="image/*" hidden> */}
          </div>
          <div className="user-info--name">
            <p className="name">{this.state.userInfo.userName}</p>
            <p className="tel">{this.state.userInfo.phone}</p>
            <p className="tel" v-if="userType === 2">工号：{this.state.userInfo.userCode}</p>
          </div>
          <div className="user-info--jump">
            <i v-if="userType === 2" className="iconfont icon-right"></i>
          </div>
          <div className="share-icon">
            <i className="iconfont icon-share"></i>
          </div>
        </div>
        <div className="info-list">
          <List className="group">
            <Item extra={this.state.userInfo.teamNum} className="cell" arrow="horizontal">我的团队</Item>
            <Item extra={''} className="cell">业务员信息</Item>
            <Item extra={this.state.userInfo.isPro ? '已认证' : '未认证'} className={this.state.userInfo.isPop ? 'cell green' : 'cell red'} arrow="horizontal">代理认证</Item>
            <Item extra={'更换'} className="cell green" arrow="horizontal">手机号码</Item>
            <Item extra={''} className="cell" arrow="horizontal">密码修改</Item>
            <Item extra={this.state.userInfo.ydayPremium} className="cell orange">昨日保费</Item>
            <Item extra={this.state.userInfo.customerNum} className="cell orange" arrow="horizontal">客户资源</Item>
          </List>
          <div className="logout">
            退出登录
          </div>
        </div>
      </div>
    )
  }
}

export default User