import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, img, description, price } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p><span>{description}</span></p>
            <button>Book: {name}</button>
        </div>
    );
};

export default Service;