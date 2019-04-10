import React from 'react'

const BtnSubscr = (props) => {
    let name = '';
    if (props.step === 1) {
        name = 'start free trial'
    } else if (props.step === 2) {
        name = 'processing payment...'
    } else if (props.step === 3) {
        name = 'go to home page'
    } else {
        name = 'try again'
    }

    function click(e) {
        e.preventDefault();
        if (props.step === 1) {
            props.onClickFirstStep()
        } else if (props.step === 2) {
            name = 'processing payment...'
        } else if (props.step === 3) {
            props.onClickStep_3()
        } else {
            props.getFirstStart()
        }
    }
    return (
        <button type="submit" name="submit" className="btn p_subscr__btn" onClick={click}>
            {name}
                <div className="btn__hover"></div>
            <div className="btn__active"></div>
        </button>
    )
}

export default BtnSubscr;