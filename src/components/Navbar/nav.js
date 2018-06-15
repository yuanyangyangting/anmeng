import './nav.less'
import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const nav = (props) => {
  return <div className="page-nav">
    <ul className="list">
      {props.navList.map((v, k) =>
        <li key={k} className={props.active === v.url ? 'list--item active' : 'list--item'}>
          <Link to={v.url}>
          <div className="icon"></div>
          <p>{v.title}</p>
          </Link>
        </li>
      )}
    </ul>
  </div>
}

nav.propTypes = {
  navList: PropTypes.array,
}

nav.defaultProps = {
  navList: [{ title: '首页',url:'/home'}],
}
export default nav