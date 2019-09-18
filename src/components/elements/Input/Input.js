
import React from 'react';

const Input = (props) => {
    const {onInputChange, className, placeholder, id} = props;
    return(
        <input type="text"  id={id}  onChange={onInputChange} className={className} placeholder={placeholder}/>
    )
};

export default Input;