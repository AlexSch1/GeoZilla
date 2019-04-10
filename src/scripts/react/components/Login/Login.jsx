import React from 'react'
import InputMask from 'react-input-mask';
import './login.css'

export default class Login extends React.Component {
    constructor(props) {
        super(props)
    }
    setValueLogin = (e) => {
        let name = e.target.getAttribute('data-name');
        let value = e.target.value;
        this.props.setVAlueLogin({
            name,
            value
        })
    }
    onClickBtn = (e) => {
        e.preventDefault();
        let valueName = this.props.login.loginName.value;
        let valuePass = this.props.login.loginPass.value;

        if ((valueName === '')) {
            this.props.loginNovalid({
                name: 'loginName',
                valid: false
            })
        }
        if ((valuePass === '')) {
            this.props.loginNovalid({
                name: 'loginPass',
                valid: false
            })
        }

    }
    render() {
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
                                        <input
                                            type="text"
                                            placeholder="E-mail or phone"
                                            className={this.props.login.loginName.valid ? "login_fr__input" : "login_fr__input login_fr__input_novalid"}
                                            data-name='loginName'
                                            onChange={this.setValueLogin}
                                        ></input>
                                    </div>
                                    <div className="pop_up__input_wr login_fr__input_wr">
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            className={this.props.login.loginPass.valid ? "login_fr__input" : "login_fr__input login_fr__input_novalid"}
                                            data-name='loginPass'
                                            onChange={this.setValueLogin}
                                        ></input>
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