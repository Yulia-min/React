import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import Protect from './Protect';
import Header from './Header';

function User(){
    const history = useHistory()
    const {params: {userId}} = useRouteMatch();
    return <div>
      <Header/>
      Content
      <button onClick={() => {history.push(`/user/${userId}/albums`)}}>Click</button>
    </div>
}

export default User;