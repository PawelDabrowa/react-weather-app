import React, { Component } from 'react';

const CurrentWheater = (props) => {
    return (
        <>
            <div className="wheater-box">
                <p className="temp">{`${Math.floor(props.data)}°C`}</p>
            </div>
            <div className="sunrise">Sunrise {props.sunrise}</div>
            <div>{props.description}</div>
        </>
    );
}

export default CurrentWheater;