import React from 'react';

import Input from '../Form/Input.jsx';
import InputMask from 'react-input-mask';
// import intlTelInput from 'intl-tel-input/build/js/intlTelInput.min.js';

export default class CreateChange extends React.Component {
    state = {
        mailNum: '',
        phoneNum: '',

        formErrors: { mailNum: '', phoneNum: '' },
        mailValid: false,
        phoneValid: false,
        formValid: false

    }

    // componentDidMount() {
    //     var input = document.querySelector("#phone");
    //     window.intlTelInput(input);
    // }

    onSetValue = (value, name) => {
        this.setState({
            [name]: value
        })
    }

    onBlurSerValue = (value, name) => {
        
        this.validateField(value, name)
    }

    validateField = (value, name) => {
        

        let formErrors = this.state.formErrors;
        let mailValid = this.state.mailValid;
        let phoneValid = this.state.phoneValid;

        var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/

        switch (name) {
            case 'mailNum':
                mailValid = ckEmail.test(value);
                formErrors[name] = mailValid ? '' : 'no valid';
                break;
            case 'phoneNum':
                phoneValid = (value.length >= 12);
                formErrors[name] = phoneValid ? '' : 'no valid';
                break;

            default:
                break;
        }

        this.setState({
            formErrors,
            mailValid,
            phoneValid
        }, this.validateForm);


    }

    validateForm = () => {
        this.setState({
            formValid: (this.state.mailValid === true) || (this.state.phoneValid === true)
        }, () => {
            if (!this.state.formValid) return
            let value = '';
            if (this.state.mailValid) {
                value = this.state.mailNum
            } else {
                value = this.state.phoneNum
            }
            this.props.onSetValueInStore('name', value)
        });
    }

    changePop = () => {
        this.props.changePop();
    }

    onNextStep = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            let name = '';
            if (this.state.mailValid) {
                name = 'cantinue_mail'
            } else {
                name = 'cantinue_tel'
            }

            this.props.createNextStape({
                step: name
            });
        }
    }

    render() {
        return (
            <React.Fragment>
                <div className="create1_fr__body">

                    {/* <div className="pop_up__input_wr create1_fr__input_wr">
                        <input type="tel" className="login_fr__input" id="phone"/>
                    </div> */}

                    <div className="pop_up__input_wr create1_fr__input_wr">
                        <Input
                            type="email"
                            placeholder="E-mail"
                            name='mailNum'
                            classNameNoValid={this.state.formErrors.mailNum.length === 0 ? '' : this.state.mailNum === '' ? '' : 'login_fr__input_novalid'}
                            className='login_fr__input'
                            value={this.state.mailNum}
                            handler={this.onSetValue}
                            onBlur={this.onBlurSerValue}
                        >
                        </Input>
                    </div>
                    <div className="p_create1__line"><span>or</span></div>
                    <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_milti_num">
                        <InputMask
                            mask="+\ 999 999 99"
                            placeholder="Phone number"
                            maskChar={null}
                            className={this.state.formErrors.phoneNum.length === 0 ? 'login_fr__input' : this.state.phoneNum === '' ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                            name="phoneNum"
                            value={this.state.phoneNum}
                            onChange={e => this.onSetValue(e.target.value, e.target.name)}
                            onBlur={e => this.onBlurSerValue(e.target.value, e.target.name)}
                        >
                        </InputMask>
                    </div>
                    <p className="p_create1__acc_alr">
                        Already have an account?
                    <a onClick={this.changePop}>Log in</a>
                    </p>
                </div>
                <div className="login_fr__footer pop_up__input_wr pop_up__input_wr_btn p_create1__btn_wr">
                    <button
                        className="btn p_create1__btn"
                        type="submit"
                        disabled={this.state.formValid === true ? false : true}
                        onClick={this.onNextStep}
                    >
                        {this.state.formValid ? 'continue' : 'sign up'}
                        <div className="btn__hover"></div>
                        <div className="btn__active"></div>
                    </button>

                </div>

            </React.Fragment>
        )
    }
}