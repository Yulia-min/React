import React from 'react';
import { useHistory } from 'react-router';
import Protect from './Protect';

function User(){
    const history = useHistory()
    return <div>
      Content
      <button onClick={() => {history.push('/user/:userId')}}>Click</button>
    </div>
}

export default User;