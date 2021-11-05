import React from 'react';
import { useRouteMatch, useHistory } from 'react-router';

function UserId(){
    const history = useHistory();
    const {params: {userId}} = useRouteMatch();
    history.push('/user/:userId/albums');
    return(
      <div>
        User with id: {userId}
      </div>
    )
}

export default UserId;