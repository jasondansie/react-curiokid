import React from 'react';
import './Button.css'

const Button = (props) => {
    return (
        <div>
            <button type="submit" onClick={props.onClick} allbooks={props.allbooks} src={props.image}>
                <img src={props.image} alt={props.imageAlt} />
                {props.name}
            </button>
        </div>
    );
};

export default Button;