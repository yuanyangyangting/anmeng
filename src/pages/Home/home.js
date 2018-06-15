import React from 'react';
import {Link} from 'react-router-dom'
import './home.less'
import { Carousel, Divider } from 'antd'
import ProList from '../../components/ProList/ProList.js'
// import hot from '../../assets/img/home/hot.png'
class Home extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      list:[],
      productList: []
    }
  }
  componentDidMount(){
    window.$http(window.$api.getHome,{}).then(res=>{
      let data = res.data.data;
      let list = [];
      let i = {};
      if(res.data.state){
        console.log(data)
        data.slideList.forEach((item,index)=>{
          i['url'] = item.forwardUrl;
          i['img'] = item.url;
          i['title'] = '';
          list.push(i)
        })
        this.setState({
          productList:data.hotProdList,
          list:list
        })
      }
    })
  }
  render(){
    return (
      <div className="home router-view">
        <div className="swiper-bar">
          <div className="btn-login" v-if="!isLogin">
            <Link to="/login">登录</Link>
          </div>
          <Carousel autoplay>
            {this.state.list.map((item,key)=>(
              <div className="slider-content" key={key}>
                 {/* <img src={item.img} width="100%"/> */}
                 <div className="content-img" style={{backgroundImage:`url(${item.img})`}}></div>
              </div>
            ))}
          </Carousel>
        </div>
        <section className="home--block">
          <Link to="/" className="home--block__left">
            <p className="block-title">意外险</p>
            <p className="block-desc">意外保障高达百万</p>
          </Link>
          <div className="home--block__right">
            <Link to="/" className="block--right__top">
              <p className="block-title">旅游险</p>
              <p className="block-desc">旅游有保证</p>
            </Link>
            <div className="block--right__bottom">
              <Link to="/" className="right--bottom__left">
                <p className="block-title">财产险</p>
              </Link>
              <Link to="/" className="right--bottom__right">
                <p className="block-title">更多
                  <i className="iconfont icon-right"></i>
                </p>
              </Link>
            </div>
          </div>
        </section>
        <section className="home--list">
        <div className="home--list__title">
          <h3>热销产品</h3>
        </div>
        <ProList productList={this.state.productList}></ProList>
        </section>
      </div>
    )
  }
}

export default Home