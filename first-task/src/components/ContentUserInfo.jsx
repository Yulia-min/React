import React from 'react';
import ContentUserInfoItem from './UserInfoItem'

export default function ContentUserInfo({content}){
    return(
        <div className="ContentUserInfo">
            <ContentUserInfoItem name={content.name}/>
            <ContentUserInfoItem name={content.username}/>
            <ContentUserInfoItem name={content.email}/>
        </div>
    )
}