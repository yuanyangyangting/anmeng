import React from 'react'
import './loading.less'
import { connect } from 'react-redux'
const Loading = (props) =>{
  // console.log(props.isLoading)
  return (
    <div className="rx-loading" style={{display:props.isLoading?'inherit':'none'}}>
      <div className="rx-loading--icon">
        <div className="loader-29">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

// export default Loading
const mapStateToProps = state =>{
  return  {isLoading:state.isLoading}
}
export default connect(mapStateToProps,)(Loading)