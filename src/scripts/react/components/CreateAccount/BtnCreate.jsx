import React from 'react';

const BtnCreate = (props) => {


    function click(e) {
        e.preventDefault();
        props.onClick();
    }

    return (
        <button 
            className="btn p_create1__btn" 
            type="submit" 
            onClick={click}
            disabled={props.disabled}
        >
            {props.name}
            <div className="btn__hover"></div>
            <div className="btn__active"></div>
        </button>
    )
}

export default BtnCreate;