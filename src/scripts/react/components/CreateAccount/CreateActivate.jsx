import React from 'react';

import Input from '../Form/Input.jsx';
import InputMask from 'react-input-mask';

export default class CreateActivate extends React.Component {

    state = {
        codeActivate: '',
        validCode: true
    }

    setValue = (e) => {
        this.setState({
            codeActivate: e.target.value
        })
    }


    onActivate = (e) => {
        e.preventDefault();
        if (this.props.codeActivate === this.state.codeActivate) {
            this.setState({
                validCode: true
            });
            this.props.createNextStape({
                step: 'finish_activate'
            })
        } else {
            this.setState({
                validCode: false
            });
            return
        }
    }


    render() {
        return (
            <React.Fragment>
                <div className="create1_fr__body">

                    

                    <p className="p_create1__valueUserConect_title">Account activation code has been sent to</p>


                    <p className="p_create1__valueUserConect">
                        {this.props.valueUserConect}
                        {/* <a onClick={this.changePop}>Log in</a> */}
                    </p>

                    <div className="pop_up__input_wr create1_fr__input_wr login_fr__input_wr_code">
                        <InputMask
                            mask="999999"
                            placeholder="6 digit code"
                            maskChar={null}
                            // className={this.state.codeNum ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                            className={this.state.validCode ? 'login_fr__input' : 'login_fr__input login_fr__input_novalid'}
                            name="codeNum"
                            onChange={this.setValue}
                        >
                        </InputMask>
                        <a href="#" className="Resend">Re-send</a>
                    </div>
                </div>
                <div className="login_fr__footer pop_up__input_wr pop_up__input_wr_btn p_create1__btn_wr">
                    <button
                        className="btn p_create1__btn"
                        type="submit"
                        onClick={this.onActivate}
                    >
                        {'activate'}
                        <div className="btn__hover"></div>
                        <div className="btn__active"></div>
                    </button>

                </div>

            </React.Fragment>
        )
    }
}