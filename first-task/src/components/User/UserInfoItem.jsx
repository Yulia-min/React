import React from 'react';

export default function UserInfoItem({name}){
    return(
        <div className="UserInfoItem">
            <span>{name}</span>
        </div>
    )
}