import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h4>Name: {name}</h4>
            <p>Price: {price}</p>
            <p><span>{description}</span></p>
            <button onClick={() => navigateToServiceDetail(id)}>Book: {name}</button>
        </div>
    );
};

export default Service;