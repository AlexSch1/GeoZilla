import React from 'react'
import Input from '../Form/Input.jsx';
import './CreateAccount.css'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import InputMask from 'react-input-mask';

export default class CreateAccount extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        phoneNum: true,
        mailNum: true,
        codeNum: true
    }


    validValueAndSetNum = (e) => {
        let { createSetValue, createContinue } = this.props;
        let name = e.target.name;
        let value = e.target.value;

        if (value.length < 13) {
            this.setState({
                [name]: false
            })
        } else {
            this.setState({
                [name]: true
            })
            createSetValue({
                name,
                value
            });
            createContinue()
            // ajax
        }
    }

    validValueAndSetMail = (val, nam) => {
        console.log(val, nam)
        let { createSetValue, createContinue } = this.props;
        let name = nam;
        let value = val;
        var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i

        if (ckEmail.test(value)) {
            console.log('valid')
            this.setState({
                [name]: true
            })
            createSetValue({
                name,
                value
            });
            createContinue()
        } else {
            console.log('no valid')
            this.setState({
                [name]: false
            })
        }
    }

    codeValid = (e) => {
        let name = e.target.name;
        let { createSetValue } = this.props;
        let codeInput = parseInt(e.target.value);

        createSetValue({
            name,
            value: codeInput
        })


    }

    closePop = () => {
        this.props.createClose()
    }

    changePop = () => {
        this.props.createClose();
        this.props.loginOpen();
    }

    nextStep = (e) => {
        e.preventDefault();
        let { createNextStape } = this.props;
        let { step, code, codeNum } = this.props.createAccount;

        if (step === 'change') {
            return
        } else if (step === 'continue') {
            createNextStape({
                step: 'activate'
            })
        } else if (step === 'activate') {
            if (code === codeNum) {
                createNextStape({
                    step: 'finishStep'
                })
                this.setState({
                    codeNum: true
                })
            } else {
                this.setState({
                    codeNum: false
                })
            }
        } else if (step === 'finishStep') {
            console.log('finishStep Click')
        }


    }

    render() {
        console.log(this.props)
        let { step, phoneNum, mailNum } = this.props.createAccount;


        let finslStrActivate = null;
        if (phoneNum) {
            let whereActivate = '';
            whereActivate += phoneNum;
            finslStrActivate = (
                <React.Fragment>
                    <p className="strActivate">Account activation code has been sent to</p>
                    <p className="whereActivate">{whereActivate}</p>
                </React.Fragment>
            )
        } else {
            let whereActivate = '';
            whereActivate += mailNum;
            finslStrActivate = (
                <React.Fragment>
                    <p className="strActivate">Account activation code has been sent to</p>
                    <p className="whereActivate">{whereActivate}</p>
                </React.Fragment>
            )
        }

        let code = '';
        if (phoneNum) {
            code = (
                <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_code">
                    <InputMask
                        mask="999999"
                        placeholder="6 digit code"
                        maskChar={null}
                        className={this.state.codeNum ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                        name="codeNum"
                        onChange={this.codeValid}
                    >
                    </InputMask>
                </div>
            )
        } else {
            code = (
                <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_code">
                    <InputMask
                        mask="999999"
                        placeholder="6 digit code"
                        maskChar={null}
                        className={this.state.codeNum ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                        name="codeNum"
                        onChange={this.codeValid}
                    >
                    </InputMask>
                </div>
            )
        }


        let popUp = (
            <div className="pop_up_r">

                <div className="pop_up__bg pop_up_active p_create1_wr">
                    <div className="p_create1 pop_up__wr pop_up_active">
                        <a href="#" className="pop_up__toggle cross" onClick={this.closePop}></a>


                        <div className="pop_up__head">
                            <a href="#" className="p_create1__link_lg">
                                <img src="../../../../../static/img/icon/GeoZilla-LOGO.png" alt="logo" className="p_create1__logo" />
                            </a>
                            <h6 className="pop_up__title p_create1__title"> {step === 'finishStep' ? 'Account created!' : 'Create GeoZilla account'}  </h6>
                            {step === 'activate' ? finslStrActivate : null}
                        </div>

                        <div className="pop_up__body">


                            <form action="#" method="get" className="login_fr">
                                <div className="create1_fr__body">

                                    {
                                        (step === 'change' || step === 'continue') ?
                                            <React.Fragment>
                                                <div className="pop_up__input_wr create1_fr__input_wr">
                                                    <Input
                                                        type="email"
                                                        placeholder="E-mail or phone"
                                                        name='mailNum'
                                                        className='login_fr__input'
                                                        classNameNoValid={this.state.mailNum ? false : 'login_fr__input_novalid'}
                                                        // value={this.props.login.loginName.value}
                                                        handler={this.validValueAndSetMail}
                                                    >
                                                    </Input>
                                                </div>
                                                <div className="p_create1__line"><span>or</span></div>
                                                <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_milti_num">
                                                    {/* <InputMask
                                                        mask="+\ 9999"
                                                        placeholder="Phone number"
                                                        maskChar={null}
                                                        className="login_fr__input"
                                                    >
                                                    </InputMask> */}
                                                    <InputMask
                                                        mask="+4\9 99 999 99"
                                                        placeholder="Phone number"
                                                        maskChar={null}
                                                        className={this.state.phoneNum ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                                                        name="phoneNum"
                                                        onChange={this.validValueAndSetNum}
                                                    >
                                                    </InputMask>
                                                </div>
                                            </React.Fragment>
                                            : false
                                    }




                                </div>

                                {
                                    (step === 'change' || step === 'continue') ?
                                        <p className="p_create1__acc_alr">Already have an account? 
                                            <a onClick={this.changePop}>Log in</a>
                                        </p>
                                        : null

                                }

                                {
                                  step === 'finishStep' ?  
                                    <p className="p_create1__acc_fin">You have successfully joined GeoZilla Community. </p>
                                    : null
                                }

                                {step === 'activate' ? code : null}




                                <div className="login_fr__footer pop_up__input_wr pop_up__input_wr_btn p_create1__btn_wr">

                                    <button type="submit" name="submit" className="btn p_create1__btn" onClick={this.nextStep}>
                                        {step === 'change' ? 'Sign up' : step === 'continue' ? 'continue' : step === 'activate' ? 'activate' : step === 'finishStep' ? 'profile page' : 'Sign up'}
                                        <div className="btn__hover"></div>
                                        <div className="btn__active"></div>
                                    </button>

                                </div>

                                {step === 'finishStep' ?
                                    null
                                    : <React.Fragment>
                                        <p className="p_create1__desc_footer">By continuing to use GeoZilla, you agree to our  </p>
                                        <p className="p_create1__desc_footer p_create1__desc_footer_multi">
                                            <a href="#">Terms of Use</a>
                                            <span>and</span>
                                            <a href="#">Privacy Policy</a>
                                        </p>
                                    </React.Fragment>
                                }




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