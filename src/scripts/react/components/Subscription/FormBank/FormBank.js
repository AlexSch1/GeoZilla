import React from 'react'
import MaskedInput from 'react-text-mask'
import InputMask from 'react-input-mask';
import BtnSubscr from './BtnSubscr.jsx'
const FormBank = (props) => {
    // console.log(props)

    function getFirstStart() {
        props.subscriptionBase({ openPop: true })
    }

    function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    function firstStep(e) {
        let alltrigger = true

        if (alltrigger) {
            props.nextStep(props.step);

            setTimeout(() => {
                // props.subscription_step_home()
                // props.subscription_step_again()
            }, 1000)
        }



    }

    function onClickEO(e) {
        let name = e.target.getAttribute('data-name');
        let value = e.target.value;
        props.setvalue({
            name,
            value
        })
    }

    let loader = (
        <div className="subscription__loader_wr">
            <div className="subscription__laoder"></div>
        </div>
    )
    let gohome = (
        <div className="subscription__loader_wr">
            <img src="../../../../../static/img/icon/gohome.png"></img>
        </div>
    )
    let tryagain = (
        <div className="subscription__loader_wr">
            <img src="../../../../../static/img/icon/tryagain.svg"></img>
        </div>
    )
    let title = '7 days free trial subscription';
    let descr = 'Then $79.99 USD biled annually, cancel anytime.';

    if (props.step === 3) {
        title = 'Payment confirmed';
        descr = 'Thank you! Your payment was successful';
    }
    if (props.step === 4) {
        title = 'There was a problem';
        descr = 'Something went wrong. Please update billing info';
    }
    return (
        <div>
            <div className="pop_up__head">
                <a href="#" className="p_subscr__link_lg">
                    <img src="../../../../../static/img/icon/GeoZilla-LOGO.png" alt="logo" className="p_subscr__logo" />
                </a>
                <h6 className="pop_up__title p_subscr__title"> {title}</h6>
                <p className="pop_up__descript">{descr}</p>
            </div>
            <div className="pop_up__body">
                <div className="pop_up__body2 dropin-containe"></div>
                <p className="bank_fr__text">You won’t be charged until after free week.</p>
                <p className="bank_fr__text">We will remind you 1 day before your trial ends.</p>
                {props.step === 2 ? loader : null}
                {props.step === 3 ? gohome : null}
                {props.step === 4 ? tryagain : null}


            </div>
            <form action="#" method="get" className="bank_fr">
                <div className="bank_fr__footer pop_up__input_wr pop_up__input_wr_btn p_subscr__btn_wr">
                    <BtnSubscr
                        step={props.step}
                        onClickFirstStep={firstStep}
                        onClickStep_3={props.subscription_step_close}
                        getFirstStart={getFirstStart}
                    >
                    </BtnSubscr>
                </div>
            </form>
        </div>
    )
}

export default FormBank;