import React from 'react';

import Input from '../Form/Input.jsx';
import InputMask from 'react-input-mask';

export default class CreateChange extends React.Component {
    state = {
        mailNum: '',
        phoneNum: '',

        formErrors: { mailNum: '', phoneNum: '' },
        mailValid: false,
        phoneValid: false,
        formValid: false

    }

    onSetValueInStore = (value, name) => {
        this.props.onSetValueInStore(name, value);
        this.validateField(value, name);
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
                phoneValid = (value.length >= 13);
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
            if (this.state.formValid) {
                let name = '';
                if (this.state.mailValid) {
                    name = 'cantinue_mail'
                } else {
                    name = 'cantinue_tel'
                }
                this.props.createContinue(name)
            } else {
                this.props.createFirstMain('true')
            }
        });

    }

    changePop = () => {
        this.props.changePop();
    }

    render() {
        return (
            <React.Fragment>
                <div className="pop_up__input_wr create1_fr__input_wr">
                    <Input
                        type="email"
                        placeholder="E-mail"
                        name='mailNum'
                        classNameNoValid={this.state.formErrors.mailNum.length === 0 ? '' : 'login_fr__input_novalid'}
                        className='login_fr__input'
                        value={this.props.mailNum}
                        handler={this.onSetValueInStore}
                    >
                    </Input>
                </div>
                <div className="p_create1__line"><span>or</span></div>
                <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_milti_num">
                    <InputMask
                        mask="+4\9 99 999 99"
                        placeholder="Phone number"
                        maskChar={null}
                        className={this.state.formErrors.phoneNum.length === 0 ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                        name="phoneNum"
                        value={this.props.phoneNum}
                        onChange={e => this.onSetValueInStore(e.target.value, e.target.name )}
                    >
                    </InputMask>
                </div>
                <p className="p_create1__acc_alr">
                    Already have an account?
                    <a onClick={this.changePop}>Log in</a>
                </p>
            </React.Fragment>
        )
    }
}
