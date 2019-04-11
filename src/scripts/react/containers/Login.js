import Login from '../components/Login/Login.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as loginActions from '../actions/login'

function ajxLogIn(name, pass) {
  console.log('hear')
  return true
}


let mapStateToProps = ({ login }) => {
  return ({
    login,
    connectLogIn: login.connect === 'load' ? ajxLogIn() : false
  })
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(loginActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Login)
