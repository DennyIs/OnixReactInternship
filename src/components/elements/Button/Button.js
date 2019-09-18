
import React from 'react';

const Button = (props) => {
    const {title, onButtonClick, className} = props;
    return(
        <button type='button' className={className} onClick={onButtonClick}>{title}</button>
    )
};

export default Button;