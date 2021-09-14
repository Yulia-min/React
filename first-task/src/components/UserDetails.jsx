import React from 'react';
import UserInfo from './UserInfo'
import Avatar from './Avatar'


export  default function UserDetails({user}){
    return(
        <div className="UserDetails">
            <Avatar src={user.logo}/>
            <UserInfo user={user}/>
        </div>
    )
}