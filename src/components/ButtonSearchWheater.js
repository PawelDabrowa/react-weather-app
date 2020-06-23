import React, { Component } from 'react';
import './ButtonSearchWheater.css';

import FontAwesome from 'react-fontawesome'
const ButtonSearch = (props) => {
    return (
        <button onClick={props.click}>
            <i className="fa fa-search" aria-hidden="true"></i>
        </button>
    );
}
export default ButtonSearch;