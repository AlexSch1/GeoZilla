import React from 'react';

import Input from '../Form/Input.jsx';
import InputMask from 'react-input-mask';

export default class CreateField extends React.Component {


    state = {
        valueMainInput: this.props.valueFieldStep,
        pass: '',
        name: '',

        formErrors: { valueMainInput: '', pass: '', name: '' },
        validValueMainInput: true,
        passValid: false,
        nameValid: false,
        formValid: false,

        passShow: false

    }

    changePop = () => {
        this.props.changePop();
    }

    onNextStep = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            let name = '';
            if (this.props.step === 'cantinue_mail') {
                name = 'cantinue_mail_activate'
            } else {
                name = 'cantinue_tel_activate'
            }

            this.props.createNextStape({
                step: name
            });
        }
    }

    onShowPasss = (e) => {
        e.preventDefault();
        this.setState({
            passShow: !this.state.passShow
        }, () => {
            setTimeout(() => {
                this.setState({
                    passShow: !this.state.passShow
                })
            }, 1000)
        })
    }

    onSetValueInState = (value, name) => {
        this.setState({
            [name]: value
        }, this.validateField(value, name))
    }

    validateField = (value, name) => {
        let formErrors = this.state.formErrors;
        let validValueMainInput = this.state.validValueMainInput;
        let passValid = this.state.passValid;
        let nameValid = this.state.nameValid;


        switch (name) {
            case 'valueMainInput':
                if (this.props.step === 'cantinue_mail') {
                    var ckEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/
                    validValueMainInput = ckEmail.test(value);
                    formErrors[name] = validValueMainInput ? '' : 'no valid';
                } else {
                    validValueMainInput = (value.length >= 12);
                    formErrors[name] = validValueMainInput ? '' : 'no valid';
                }
                break;
            case 'pass':
                passValid = (value.length > 5);
                formErrors[name] = passValid ? '' : 'no valid';
                break;
            case 'name':
                var ckName = /^[А-Яа-яA-Za-z\s]{1,20}$/

                nameValid = ckName.test(value);
                formErrors[name] = nameValid ? '' : 'no valid';
                break;
            default:
                break;
        }

        this.setState({
            formErrors,
            validValueMainInput,
            passValid,
            nameValid
        }, this.validateForm);


    }

    validateForm = () => {
        this.setState({
            formValid: (this.state.validValueMainInput === true) && (this.state.passValid === true) && (this.state.nameValid === true)
        }, () => {
            if (!this.state.formValid) return
            this.props.createContinue({
                emailOrNum: this.state.valueMainInput,
                pass: this.state.pass,
                name: this.state.name 
            })
        });
    }


    render() {
        let mainInput = null;
        if (this.props.step === 'cantinue_mail') {
            mainInput = (<Input
                type="email"
                placeholder="E-mail"
                name='valueMainInput'
                classNameNoValid={this.state.formErrors.valueMainInput.length === 0 ? '' : this.state.valueMainInput === '' ? '' : 'login_fr__input_novalid'}
                className='login_fr__input'
                value={this.state.valueMainInput}
                handler={this.onSetValueInState}
            >
            </Input>)
        } else {
            mainInput = (<InputMask
                mask="+\ 999 999 99"
                placeholder="Phone number"
                maskChar={null}
                className='login_fr__input'
                className={this.state.formErrors.valueMainInput.length === 0 ? 'login_fr__input' : this.state.valueMainInput === '' ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                name="valueMainInput"
                value={this.state.valueMainInput}
                onChange={e => this.onSetValueInState(e.target.value, e.target.name)}
            >
            </InputMask>)
        }
        return (
            <React.Fragment>
                <div className="create1_fr__body">

                    <div className="pop_up__input_wr create1_fr__input_wr">
                        {mainInput}
                    </div>
                    <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_milti_num">
                        <input
                            className={this.state.formErrors.pass.length === 0 ? 'login_fr__input' : this.state.pass === '' ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                            placeholder='password'
                            name="pass"
                            value={this.state.pass}
                            type={this.state.passShow ? 'text' : 'password'}
                            onChange={(e) => this.onSetValueInState(e.target.value, e.target.name)}
                        >
                        </input>
                        <img className="eay_show" src="../../../../../static/img/icon/passShow.svg" alt="pass" onClick={this.onShowPasss} />
                    </div>
                    <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_milti_num">
                        <Input
                            type="text"
                            placeholder="name"
                            name='name'
                            classNameNoValid={this.state.formErrors.name.length === 0 ? '' : this.state.name === '' ? '' : 'login_fr__input_novalid'}
                            className='login_fr__input'
                            value={this.state.name}
                            handler={this.onSetValueInState}
                        >
                        </Input>
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
                        sign up
                        <div className="btn__hover"></div>
                        <div className="btn__active"></div>
                    </button>

                </div>

            </React.Fragment>
        )
    }
}
