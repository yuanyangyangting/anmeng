import React from 'react'
import { Link } from 'react-router-dom'
import './home.less'
import { Carousel, WingBlank } from 'antd-mobile'
import { connect } from 'react-redux'
import ProList from '../../components/ProList/ProList.jsx'
import PropTypes from 'prop-types'
import { loadingState, setActive } from "../../redux/action.js"

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      productList: []
    }
  }
  componentDidMount() {
    window.$http(window.$api.getHome, {}).then(res => {
      let data = res.data.data;
      let list = [];
      let i = {};
      if (res.data.state) {
        data.slideList.forEach((item, index) => {
          i['url'] = item.forwardUrl;
          i['img'] = item.url;
          i['title'] = '';
          list.push(i)
        })
        this.setState({
          productList: data.hotProdList,
          list: list
        });
      }
    })
  }
  jumpTo(key){
    this.props.setActive(key)
    // this.props.location.push('/allproduct')
    this.props.history.push('/allproduct')
  }
  render() {
    return (
      <div className="home router-view">
        <div className="swiper-bar">
          <div className="btn-login" v-if="!isLogin">
            <Link to="/login">登录</Link>
          </div>
          <Carousel
            autoplay
            infinite
          >
            {this.state.list.map((item, key) => (
              <div className="slider-content" key={key}>
                {/* <img src={item.img} width="100%" height="3.68rem" /> */}
                <div className="content-img" style={{ backgroundImage: `url(${item.img})` }}></div>
              </div>
            ))}
          </Carousel>
        </div>
        <section className="home--block">
          <div onClick={this.jumpTo.bind(this,2)} className="home--block__left">
            <p className="block-title">意外险</p>
            <p className="block-desc">意外保障高达百万</p>
          </div>
          <div className="home--block__right">
            <div onClick={this.jumpTo.bind(this,3)} className="block--right__top">
              <p className="block-title">旅游险</p>
              <p className="block-desc">旅游有保证</p>
            </div>
            <div className="block--right__bottom">
              <div onClick={this.jumpTo.bind(this,4)} className="right--bottom__left">
                <p className="block-title">财产险</p>
              </div>
              <div onClick={this.jumpTo.bind(this,1)} className="right--bottom__right">
                <p className="block-title">更多
                  <i className="iconfont icon-right"></i>
                </p>
              </div>
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

// export default Home
Home.contextTypes = { store: PropTypes.object.isRequired }

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    loading: () => dispatch(loadingState(true)),
    unLoading: () => dispatch(loadingState(false)),
    setActive: (key) => dispatch(setActive(key)),
  }
};

const mapStateToProps = state => {
  return { isLoading: state.isLoading }
}

export default connect(null, mapDispatchToProps)(Home)