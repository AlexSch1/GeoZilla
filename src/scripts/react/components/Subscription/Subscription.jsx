import React from 'react'
import './subscription.css'
import FormBank from './FormBank/FormBank.js';
var dropin = require('braintree-web-drop-in');

export default class SubscriptionPopUp extends React.Component {
  componentDidMount() {
    let stepAgain = () => {
      this.props.subscription_step_again();
    }
    let stepSuss = () => {
      this.props.subscription_step_home();
    }
    let stepStart = (v) => {
      this.props.subscription({payload: true})
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
      console.log(createErr)
      button.addEventListener('click', function () {

        instance.requestPaymentMethod(function (err, payload) {
          if (err) {
            if (err.message === 'No payment method is available.') {
              stepStart({ openPop: 'true' });
              return
            }
             stepAgain()
          }
          if (payload) {
            stepSuss()
          }
        });
      });
    });
  }

  testClick = () => {

    // let click = this.props.subscription_step_home;
    // let click = this.props.subscription_step_again;

    
  }


  render() {
    const state = this.props;
    const { step } = state.subscriptionState;
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

    let formCard = null;

    switch (step) {
      case 'step_main':
        formCard = (<FormBank
          nameBtn='start free trial'
          step={this.props.subscriptionState.step}
          onClickBtn={this.props.subscription_connect}

        ></FormBank>)

        break;

      case 'step_connect':
        formCard = (<FormBank
          nameBtn='processing payment...'
          step={this.props.subscriptionState.step}
          onClickBtn={false}
        ></FormBank>)

        break;

      case 'step_go_home':
        formCard = (<FormBank
          nameBtn='go to home page'
          step={this.props.subscriptionState.step}
          onClickBtn={this.props.subscription_step_close}
        ></FormBank>)

        break;
      case 'step_again':
        formCard = (<FormBank
          nameBtn='try again'
          step={this.props.subscriptionState.step}
          onClickBtn={()=> this.props.subscription({payload: true})}
        ></FormBank>)

        break;

      default:
        break;
    }



    let popUp = (
      <div className="pop_up_r">
        <div className="pop_up__bg pop_up_active">
          <div className="p_subscr pop_up__wr pop_up_active">
            <a href="#" className="pop_up__toggle cross" onClick={this.props.subscription_step_close}></a>

            {formCard}

            {(step === 'step_go_home' || step === 'step_again') ? null : popUpFooter}

          </div>
        </div>
      </div>
    )
    return (
      <div>{popUp}</div>
    )
  }
}
