import React from 'react'

const BtnSubscr = (props) => {

    function click(e) {
        e.preventDefault();
        props.onClickBtn();
    }
    return (
        <button 
            disabled={props.onClickBtn ? false : true}
            type="submit" 
            name="submit" 
            className="btn p_subscr__btn" onClick={click}>
            {props.nameBtn}
            <div className="btn__hover"></div>
            <div className="btn__active"></div>
        </button>
    )
}

export default BtnSubscr;