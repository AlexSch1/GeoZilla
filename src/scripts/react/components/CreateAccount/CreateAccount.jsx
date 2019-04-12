import React from 'react'
import Input from '../Form/Input.jsx';
import './CreateAccount.css'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import InputMask from 'react-input-mask';
import CreateField from './CreateField.jsx';
import CreateChange from './CreateChange.jsx';
import BtnCreate from './BtnCreate.jsx';

export default class CreateAccount extends React.Component {
    

    onSetValueInStore = (targetName, targetValue) => {
        let name = targetName;
        let value = targetValue

        this.props.createSetValue({
            name,
            value
        })
    }

    onClickBtnNext = () => {
        let { step, nextStepTo } = this.props.createAccount;

        if (nextStepTo === 'cantinue_mail') {
            console.log('TO MAIL')
        } else {
            console.log('TO PHONE')
        }
    }

    changePop = () => {
        this.props.createClose();
        this.props.loginOpen();
    }


    render() {
        console.log(this.props.createAccount)

        let { step } = this.props.createAccount;

        let stateForm = null;
        let btn = null;

        switch (step) {
            case 'change':
                stateForm = (
                    <CreateChange
                        onSetValueInStore={this.onSetValueInStore}
                        phoneNum={this.props.createAccount.phoneNum}
                        mailNum={this.props.createAccount.mailNum}
                        createContinue={this.props.createContinue}
                        createFirstMain={this.props.createFirstMain}
                        changePop={this.changePop}
                    ></CreateChange>
                );

                btn = (
                    <BtnCreate
                        name='sign up'
                        onClick={null}
                        disabled={true}
                    ></BtnCreate>
                )

                break;
            case 'continue':
                stateForm = (
                    <CreateChange
                        onSetValueInStore={this.onSetValueInStore}
                        phoneNum={this.props.createAccount.phoneNum}
                        mailNum={this.props.createAccount.mailNum}
                        createContinue={this.props.createContinue}
                        createFirstMain={this.props.createFirstMain}
                        createClose={this.createClose}
                    ></CreateChange>
                );

                btn = (
                    <BtnCreate
                        name='continue'
                        onClick={this.onClickBtnNext}
                        disabled={false}
                    ></BtnCreate>
                )

                break;

            default:
                break;
        }


        let popUp = (
            <div className="pop_up_r">

                <div className="pop_up__bg pop_up_active p_create1_wr">
                    <div className="p_create1 pop_up__wr pop_up_active">
                        <a href="#" className="pop_up__toggle cross"></a>


                        <div className="pop_up__head">
                            <a href="#" className="p_create1__link_lg">
                                <img src="../../../../../static/img/icon/GeoZilla-LOGO.png" alt="logo" className="p_create1__logo" />
                            </a>
                            <h6 className="pop_up__title p_create1__title"> Account created!  </h6>
                        </div>

                        <div className="pop_up__body">


                            <form action="#" method="get" className="login_fr">
                                <div className="create1_fr__body">


                                    {stateForm}

                                </div>

                                <div className="login_fr__footer pop_up__input_wr pop_up__input_wr_btn p_create1__btn_wr">
                                    {btn}

                                </div>

                            </form>
                            <p className="p_create1__desc_footer">By continuing to use GeoZilla, you agree to our  </p>
                            <p className="p_create1__desc_footer p_create1__desc_footer_multi">
                                <a href="#">Terms of Use</a>
                                <span>and</span>
                                <a href="#">Privacy Policy</a>
                            </p>
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