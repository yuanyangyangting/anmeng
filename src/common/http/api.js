const HOST = "";
const serviceModule = {
  // 登录
  login: {
    url: HOST + '/login',
    method: 'post'
  },
  // 获取短信验证码按钮
  getVerificationCode: {
    url: HOST + '/getVerificationCode',
    method: 'post'
  },
  // 手机号唯一
  isSigle: {
    url: HOST + '/isSigle',
    method: 'post'
  },
  // 是否老代理
  isOld: {
    url: HOST + '/isOld',
    method: 'post'
  },
  // 提交注册or激活
  subUserInfo: {
    url: HOST + '/subUserInfo',
    method: 'post'
  },
  // 重置密码
  resetPasswd: {
    url: HOST + '/resetPasswd',
    method: 'post'
  },
  // 更换手机
  resetPhone: {
    url: HOST + '/resetPasswd',
    method: 'post'
  },
  // 获取首页数据
  getHome: {
    url: HOST + '/getHome',
    method: 'post'
  },
  // 我的订单列表
  orderList: {
    url: HOST + '/orderList',
    method: 'post'
  },
  // 取消订单
  removeOrder: {
    url: HOST + '/removeOrder',
    method: 'post'
  },
  // 客户订单列表
  clientOrderList: {
    url: HOST + '/clientOrderList',
    method: 'post'
  },
  // 我的团队列表
  groupList: {
    url: HOST + '/groupList',
    method: 'post'
  },
  // 我的客户列表
  clientList: {
    url: HOST + '/clientList',
    method: 'post'
  },
  // 个人中心
  userCenter: {
    url: HOST + '/userCenter',
    method: 'post'
  },
  // 业务员信息
  salesmanInfo: {
    url: HOST + '/salesmanInfo',
    method: 'post'
  },
  // 个人代理信息
  getUserInfo: {
    url: HOST + '/getUserInfo',
    method: 'post'
  },
  // 更新个人代理
  updateUserInfo:{
    url: HOST + '/updateUserInfo',
    method: 'post'
  },
  // 全部产品
  getProduct: {
    url: HOST + '/getProduct',
    method: 'post'
  },
  // 订单详情
  getOrderDetail: {
    url: HOST + '/getOrderDetail',
    method: 'post'
  },
  // 取消订单
  removeOrder: {
    url: HOST + '/removeOrder',
    method: 'post'
  },
  // 获取问题
  getQuestion: {
    url: HOST + '/getQuestion',
    method: 'post'
  },
  // 回答
  postAnswer: {
    url: HOST + '/postAnswer',
    method: 'post'
  },
  // 产品详情
  getProductDetail:{
    url:HOST+'/getProductDetail',
    method:'post'
  }
}

export default serviceModule;

/**
 * 调用
 *  http(apiSetting.getProjects,{}).then(
 *          res = >{
 *               this.$store.commit("loadProject", res.data.data);
 *           },
 *            error = >{
 *                console.log(error);
 *            })
 */
