import React from 'react'
import InputMask from 'react-input-mask';
import './login.css'
import Input from '../Form/Input.jsx';

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }

    // state = {
    //     emailOrPhone: '',
    //     pass: '',


    //     formErrors: { emailOrPhone: '', password: '' },

    //     validEmailOrPhone: false,
    //     validPass: false,

    //     formValid: false
    // }

    // onSetEmailOrNum = (e) => {
    //     this.setState({
    //         emailOrPhone: e.target.value
    //     }, () => {this.validateForm('emailOrPhone', e.target.value)});
    // }

    // onBlur = (name, val) => {
    //     this.validateForm(name, val)
    // }

    // onSetPass = (e) => {
    //     this.setState({
    //         pass: e.target.value
    //     }, () => {this.validateForm('pass', e.target.value)});
    // }

    // validateForm = (fieldName, value) => {
    //     let fieldValidationErrors = this.state.formErrors;
    //     let emailValid = this.state.validEmailOrPhone;
    //     let passwordValid = this.state.validPass;

    //     switch (fieldName) {
    //         case 'emailOrPhone':
    //             let ckEmailN = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
    //             emailValid = ckEmailN.test(value)
    //             fieldValidationErrors.emailOrPhone = emailValid ? '' : 'is invalid';
    //             break;
    //         case 'pass':
    //             passwordValid = (valuePass === '');
    //             fieldValidationErrors.password = passwordValid ? '' : 'is too short';
    //             break;
    //         default:
    //             break;
    //     }

    //     this.setState({
    //         formErrors: fieldValidationErrors,
    //         validEmailOrPhone: emailValid,
    //         validPass: passwordValid
    //       }, this.validateForm);


    // }

    // validateForm = () => {
    //     this.setState({formValid: this.state.validEmailOrPhone && this.state.validPass});
    // }

    // className={`form-group ${this.errorClass(this.state.formErrors.email)}`}

    // errorClass = (error) => {
    //     return (error.length === 0 ? '' : 'has-error');
    // }

    setValueLogin = (val, nam) => {
        let name = nam;
        let value = val;
        this.props.setVAlueLogin({
            name,
            valid: true,
            value
        });
    }

    onClickBtn = (e) => {
        e.preventDefault();

        function isNumeric(n) {
            return !isNaN(parseFloat(n)) && isFinite(n);
        }
        let trigger = true;
        let valueName = this.props.login.loginName.value;
        let valuePass = this.props.login.loginPass.value;

        if ((valueName === '')) {
            trigger = false;
            this.props.loginNovalid({
                name: 'loginName',
                valid: false
            })
        } else {
            var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
            if (!ckEmail.test(valueName)) {
                if (!isNumeric(valueName)) {
                    trigger = false;
                    this.props.loginNovalid({
                        name: 'loginName',
                        valid: false
                    })
                }
            }
        }

        if ((valuePass === '')) {
            this.props.loginNovalid({
                name: 'loginPass',
                valid: false
            })
            trigger = false;
        }

        if (trigger) {
            this.props.loginConnect('load');
        }

    }

    render() {
        if (this.props.connectLogIn) {
            this.props.loginConnect('true');
        }
        let popUp = (
            <div className="pop_up_r">

                <div className="pop_up__bg pop_up_active p_login_wr">
                    <div className="p_login pop_up__wr pop_up_active">
                        <a href="#" className="pop_up__toggle cross" onClick={this.props.loginClose}></a>
                        <div className="pop_up__head">


                            <h6 className="pop_up__title p_login__title"> Log into your account</h6>
                        </div>
                        <div className="pop_up__body">
                            <form action="#" method="get" className="login_fr">

                                <div className="login_fr__body">

                                    <div className="pop_up__input_wr login_fr__input_wr">
                                        <Input
                                            type="text"
                                            placeholder="E-mail or phone"
                                            name='loginName'
                                            className='login_fr__input'
                                            classNameNoValid={this.props.login.loginName.valid ? false : 'login_fr__input_novalid'}
                                            value={this.props.login.loginName.value}
                                            handler={this.setValueLogin}
                                        ></Input>
                                    </div>
                                    <div className="pop_up__input_wr login_fr__input_wr">
                                        <Input
                                            type="password"
                                            placeholder="Password"
                                            name='loginPass'
                                            className='login_fr__input'
                                            classNameNoValid={this.props.login.loginPass.valid ? false : 'login_fr__input_novalid'}
                                            value={this.props.login.loginPass.value}
                                            handler={this.setValueLogin}
                                        ></Input>
                                        <a href="" className="forget_pass">Forgot password?</a>
                                    </div>
                                </div>
                                <p className="login_fr__text">Don't have an account?  <a className="login_fr__text_link">Sign up</a></p>

                                <div className="login_fr__footer pop_up__input_wr pop_up__input_wr_btn p_login__btn_wr">
                                    <button type="submit" name="submit" className="btn p_login__btn" onClick={this.onClickBtn}>
                                        log in
                                        <div className="btn__hover"></div>
                                        <div className="btn__active"></div>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <React.Fragment>
                {popUp}
            </React.Fragment>
        )
    }
}