import React from 'react'
import Tab from '../../components/Tab/Tab.jsx'
import { List, InputItem, Toast } from 'antd-mobile';
import './login.less'
import iconPhone from '../../assets/img/login/phone.png';
import passwd from '../../assets/img/login/passwd.png';
import yzm from '../../assets/img/login/yzm.png';
const tabList = [
  {title:'业务员登录'},
  {title:'代理人登录'}
]
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active:0,
      // value:'',
      hasError: false,
      loginInfo:{
        userCode: '',
        password: '',
        yzm: ''
      }
    }
  }
  tabActive(key){
    this.setState({
      active:key
    })
  }
  onErrorClick () {
    if (this.state.hasError) {
      Toast.info('Please enter 11 digits');
    }
  }
  onChange (value){
    if (value.replace(/\s/g, '').length < 11) {
      this.setState({
        hasError: true,
      });
    } else {
      this.setState({
        hasError: false,
      });
    }
    this.setState({
      loginInfo:{userCode:value},
    });
  }
  render() {
    return (
    <div className="login">
      <Tab tabList={tabList} sliderBarWidth="12vw" active={this.state.active} tabChange={this.tabActive.bind(this)}></Tab>
      <div className="login-form">
      <div>
      <List>
          <InputItem type="phone" placeholder="请输入OA账号" error={this.state.hasError} onErrorClick={this.onErrorClick.bind(this)} onChange={this.onChange.bind(this)} value={this.state.value} >
          <img src={iconPhone} class="icon phone"/>
          </InputItem>
        </List>
      </div>
      </div>
    </div>
  )
  }
}
export default Login