import React from 'react'
import './subscription.css'
import FormBank from './FormBank/FormBank.js';
var dropin = require('braintree-web-drop-in');

export default class SubscriptionPopUp extends React.Component {
  componentDidMount() {
    let stepAgain = () => {
      // this.props.subscription_step_again();
    }
    let stepSuss = () => {
      this.props.subscription_step_home();
    }

    var button = document.querySelector('.p_subscr__btn');
    dropin.create({
      authorization: 'sandbox_ndqmmxdr_ggppr6wypy96y9hh',
      container: '.dropin-containe',
      card: {
        cardholderName: {
          required: true
        },
        overrides: {
          fields: {
            number: {
              placeholder: '0000 0000 0000 0000' // Update the number field placeholder
            },
            postalCode: {
              minlength: 5 // Set the minimum length of the postal code field
            },
            cvv: {
              placeholder: 'CVC',
              type: 'password',
              
            }
          },
          styles: {
            input: {
              'font-size': '16px' // Change the font size for all inputs
            },
            ':focus': {
              color: 'black' // Change the focus color to red for all inputs
            }
          }
        }
      }
    }, function (createErr, instance) {
      button.addEventListener('click', function () {
        instance.requestPaymentMethod(function (err, payload) {
          console.log(err)
          console.log(payload)
          if (err) {
            console.log(stepAgain)
          //  stepAgain()
          }
          if (payload) {
            stepSuss()
          }
        });
      });
    });
  }

  
  render() {
    const state = this.props;
    const { openPop, step } = state.subscriptionState;

    let popUp = null;

    let popUpFooter = (
      <div className="pop_up__footer p_subscr__footer">
        <div className="footer-get">
          <h3 className="p_subscr__footer-title">What you get</h3>
          <div className="footer-get__wr_txt">
            <p className="trial__text footer-get__text">Get notified when family leaves or arrives with unlimited Place alerts</p>
            <p className="trial__text footer-get__text">Check history of your family’s whereabouts (up to 2 weeks)</p>
            <p className="trial__text footer-get__text">Add unlimited private groups for sharing location and messages</p>
            <p className="trial__text footer-get__text">Remind your partner to buy milk when they drive by the store</p>
            <p className="trial__text footer-get__text">Be notified if your child is late to school with schedule alerts</p>
            <p className="trial__text footer-get__text">Planning to look for a gift? Go invisible for a period of time</p>
          </div>
        </div>
        <div className="footer-famillies">
          <h3 className="p_subscr__footer-title">Millions of families trust us</h3>
          <div className="footer-famillies__wr_icon">
            <a href="#" className="footer-famillies__link"><img src="../../../../../static/img/icon_comp/1.png" className="footer-famillies__icon" alt="icon" /></a>
            <a href="#" className="footer-famillies__link"><img src="../../../../../static/img/icon_comp/2.png" className="footer-famillies__icon" alt="icon" /></a>
            <a href="#" className="footer-famillies__link"><img src="../../../../../static/img/icon_comp/3.png" className="footer-famillies__icon" alt="icon" /></a>
          </div>
        </div>
        <div className="footer-desc">
          <p className="footer-desc__text">Your 7-day free trial starts after you enter payment details, and you will have unlimited access to GeoZilla family safety features.
            You may cancel at any time during your free trial and will not be charged. To cancel, please write us at support@geozilla.com.
                      GeoZilla will automatically continue your subscription at the end of your free trial and charge $79.99 USD to your payment method on an annual basis until you cancel.</p>
        </div>
      </div>
    );

    

    // if (1) {
      if (openPop) {
      popUp = (
        <div className="pop_up_r">
          <div className="pop_up__bg pop_up_active">
            <div className="p_subscr pop_up__wr pop_up_active">
              <a href="#" className="pop_up__toggle cross" onClick={this.props.subscription_step_close}></a>
              
              
              <FormBank
                nextStep={this.props.subscription_step}
                step={this.props.subscriptionState.step}
                setvalue={this.props.subscription_setvalue}
                infocard={this.props.subscriptionState}
                subscription_no_valid={this.props.subscription_no_valid}
                subscription_step_home={this.props.subscription_step_home}
                subscriptionBase={this.props.subscription}
                subscription_step_close={this.props.subscription_step_close}
                subscription_step_again={this.props.subscription_step_again}
              ></FormBank>
              
              {(step === 3 || step === 4) ? null : popUpFooter}

            </div>
          </div>
        </div>
      )
    }
    return (
      <div>{popUp}</div>
    )
  }
}
