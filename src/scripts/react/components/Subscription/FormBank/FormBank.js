import React from 'react';
import BtnSubscr from './BtnSubscr.jsx';

const FormBank = (props) => {


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

                {props.step === 'step_connect' ? loader : null}
                {props.step === 'step_go_home' ? gohome : null}
                {props.step === 'step_again' ? tryagain : null}


            </div>

            <form action="#" method="get" className="bank_fr">
                <div className="bank_fr__footer pop_up__input_wr pop_up__input_wr_btn p_subscr__btn_wr">
                    <BtnSubscr
                        nameBtn={props.nameBtn}
                        onClickBtn={props.onClickBtn}
                    >
                    </BtnSubscr>
                </div>
            </form>

        </div>
    )
}

export default FormBank;