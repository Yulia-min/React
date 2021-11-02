import React from 'react';

export default function UserCompany({company}){
    return(
        <div className={`UserCompany ${company}`}>
            <span>{company}</span>
        </div>
    )
}