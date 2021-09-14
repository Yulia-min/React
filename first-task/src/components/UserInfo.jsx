import React from 'react';
import UserInfoItem from './UserInfoItem'
import UserAddres from './UserAddres';
import UserCompany from './UserCompany';

export default function UserInfo({user}){
    return(
        <div className="UserInfo">
            <UserInfoItem name={user.name}/>
            <UserInfoItem name={user.username}/>
            <UserInfoItem name={user.email}/>
            <UserAddres addres={user.address.city}/>
            <UserCompany company={user.company.name}/>
        </div>
    )
}