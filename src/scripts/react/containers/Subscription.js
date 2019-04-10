import SubscriptionPopUp from '../components/Subscription/Subscription.jsx'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as subscriptionActions from '../actions/subscription'

let mapStateToProps = ({ subscriptionState }) => {
  return ({
    subscriptionState
  })
}

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(subscriptionActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscriptionPopUp)
