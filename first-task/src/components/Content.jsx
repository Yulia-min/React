import React from 'react';
import ContentUserInfo from './ContentUserInfo'


export  default function Content({content}){
    return(
        <div className="Content">
            <ContentUserInfo content={content}/>
        </div>
    )
}