import React from 'react'
import Input from '../Form/Input.jsx';
import './CreateAccount.css'
// import { Button, Header, Image, Modal } from 'semantic-ui-react'
// import 'semantic-ui-css/semantic.min.css'
import InputMask from 'react-input-mask';
import CreateField from './CreateField.jsx';
import CreateChange from './CreateChange.jsx';
import BtnCreate from './BtnCreate.jsx';
import CreateActivate from './CreateActivate.jsx';

export default class CreateAccount extends React.Component {


    onSetValueInStore = (targetName, targetValue) => {
        // let name = targetName;
        let value = targetValue

        this.props.createSetValue({
            value
        })
    }

    changePop = () => {
        this.props.createClose();
        this.props.loginOpen();
    }

    onProfilePage = (e) => {
        e.preventDefault();
    }



    render() {
        // console.log(this.props.createAccount)

        let { step } = this.props.createAccount;

        let stateForm = null;
        switch (step) {
            case 'change':
                stateForm = (
                    <CreateChange
                        onSetValueInStore={this.onSetValueInStore}
                        createNextStape={this.props.createNextStape}
                        changePop={this.changePop}
                    ></CreateChange>);

                break;
            case 'cantinue_mail':
                stateForm = (
                    <CreateField
                        step={step}
                        valueFieldStep={this.props.createAccount.valueChangeStep.value}
                        changePop={this.changePop}
                        createNextStape={this.props.createNextStape}
                        createContinue={this.props.createContinue}
                    ></CreateField>)
                break;
            case 'cantinue_tel':
                stateForm = (
                    <CreateField
                        step={step}
                        valueFieldStep={this.props.createAccount.valueChangeStep.value}
                        changePop={this.changePop}
                        createNextStape={this.props.createNextStape}
                        createContinue={this.props.createContinue}
                    ></CreateField>)
                break;
            case 'cantinue_mail_activate':
                stateForm = (
                    <CreateActivate
                        valueUserConect={this.props.createAccount.valueStepCreate.emailOrNum}
                        codeActivate={this.props.createAccount.cbCode}
                        createNextStape={this.props.createNextStape}
                    >

                    </CreateActivate>)
                break;
            case 'cantinue_tel_activate':
                stateForm = (
                    <CreateActivate
                        valueUserConect={this.props.createAccount.valueStepCreate.emailOrNum}
                        createNextStape={this.props.createNextStape}
                        codeActivate={this.props.createAccount.cbCode}
                    >

                    </CreateActivate>)
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
                            <h6 className="pop_up__title p_create1__title">
                                {step !== 'finish_activate' ? 'Create GeoZilla account' : 'Account created!'}
                            </h6>
                        </div>

                        <div className="pop_up__body">


                            <form action="#" method="get" className="login_fr">
                                <div className="create1_fr__body">


                                    {stateForm}

                                </div>

                            </form>
                            {step !== 'finish_activate' ? <React.Fragment>
                                <p className="p_create1__desc_footer">By continuing to use GeoZilla, you agree to our  </p>
                                <p className="p_create1__desc_footer p_create1__desc_footer_multi">
                                    <a href="#">Terms of Use</a>
                                    <span>and</span>
                                    <a href="#">Privacy Policy</a>
                                </p>
                            </React.Fragment> : <p className="finish_activate_txt">You have successfully joined GeoZilla Community.</p>}

                            {step !== 'finish_activate' ? null : <a
                                href="#"
                                className="btn p_create1__btn finish_activate_btn"
                                type="submit"
                                onClick={this.onProfilePage}
                            >
                                profile page
                                <div className="btn__hover"></div>
                                <div className="btn__active"></div>
                            </a>}


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