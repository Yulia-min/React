import React from 'react';
import UserInfo from './UserInfo';
import logo from '../logo.svg';

export  default function UserDetails({user}){
    return(
        <div className="UserDetails">
            <div className="Avatar">
                <img src = {logo} alt="logo"/>
            </div>
            <UserInfo user={user}/>
        </div>
    )
}