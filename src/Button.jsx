import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button type="submit" onClick={props.onClick}>{props.name}</button>
        </div>
    );
};

export default Button;