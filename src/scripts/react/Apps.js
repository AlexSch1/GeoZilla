import { connect } from 'react-redux'
import Subscription from './containers/Subscription.js'
import Login from './containers/Login.js';
import CreateAccount from './containers/CreateAccount.js';
var React = require('react')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }
  render () {
    let pop_subscr = this.props.subscription.openPop;
    let pop_login = this.props.login.openPop;
    let pop_create = this.props.createAccount.openPop;
    return (
      <React.Fragment>
        {pop_subscr && <Subscription></Subscription>}
        {pop_login && <Login></Login>}
        {1 && <CreateAccount></CreateAccount>}
      </React.Fragment>
      
    )
  }
}
const mapStateToProps = ({ subscriptionState, login, createAccount }) => {
  return {
    subscription: subscriptionState,
    login,
    createAccount
    
  }
}

export default connect(mapStateToProps)(App)
