import React from 'react';


import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import * as createActions from '../actions/createAccount'
import CreateAccount from '../components/CreateAccount/CreateAccount.jsx';
import { loginOpen } from '../actions/login';


let mapStateToProps = ({ createAccount }) => {
    return ({
        createAccount
    })
}

const mapDispatchToProps = dispatch => ({
    ...bindActionCreators(createActions, dispatch),
    loginOpen: function () {
        return dispatch(loginOpen())
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount)