import React from 'react';
import logo from '../logo.svg';

export  default function Avatar({user}){
    return(
        <div className="Avatar">
            <img src = {logo} alt="logo"/>
        </div>
    )
}