import React from 'react';
import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <img src={props.image} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>{props.author}</h3>
        </div>
    );
};

export default Card;