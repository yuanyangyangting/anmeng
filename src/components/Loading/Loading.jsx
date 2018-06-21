import React from 'react'
import './loading.less'
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux'
class Loading extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
  }
  render() {
    return (
      <CSSTransition
        in={this.props.isLoading}
        timeout={300}
        classNames="fade"
        onEnter={() => {
          this.setState({
            loading: true
          })
        }}
        onExited={() => {
          this.setState({
            loading: false
          })
        }}
      >
        <div className="rx-loading" style={{ display: this.state.loading ? 'inherit' : 'none' }}>
          <div className="rx-loading--icon">
            <div className="loader-29">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

// export default Loading
const mapStateToProps = state => {
  return { isLoading: state.isLoading }
}
export default connect(mapStateToProps, )(Loading)