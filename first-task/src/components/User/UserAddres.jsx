import React from 'react';

export default function UserAddres({addres}){
    return(
        <div className={`UserAddres ${addres}`}>
            <span>{addres}</span>
        </div>
    )
}