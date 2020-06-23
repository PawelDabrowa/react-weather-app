import React, { Component } from 'react';
import { string } from 'postcss-selector-parser';

const City = (props) => {
    const city = props.city.charAt(0) + props.city.slice(1)
        ;
    const country = props.country.charAt(0) + props.country.slice(1)
    return (
        <div className="location-box">
            <p className="location">{city}, {country}</p>
        </div>
    );
}

export default City;