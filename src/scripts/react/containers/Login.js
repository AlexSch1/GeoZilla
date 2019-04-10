import Login from '../components/Login/Login.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/login'

let mapStateToProps = ({ login }) => {
  return ({
    login
  })
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
