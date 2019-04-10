import { connect } from 'react-redux'
import Subscription from './containers/Subscription.js'
import Login from './containers/Login.js';
var React = require('react')

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = { liked: false }
  }
  render () {
    let pop_subscr = this.props.subscription.openPop;
    let pop_login = this.props.login.openPop;
    console.log(pop_subscr, pop_login)
    return (
      <React.Fragment>
        {pop_subscr && <Subscription></Subscription>}
        {pop_login && <Login></Login>}
      </React.Fragment>
      
    )
  }
}
const mapStateToProps = ({ subscriptionState, login }) => {
  return {
    subscription: subscriptionState,
    login
  }
}

export default connect(mapStateToProps)(App)
