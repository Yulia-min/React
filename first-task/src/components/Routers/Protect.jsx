import React, { useEffect} from 'react';
import { useHistory } from 'react-router';

function Protect({children}){
    const history = useHistory();
    useEffect(() => {
      if(!localStorage.getItem('details')){
        history.push("/login");
    }
    })
    return (<div>{children}</div>) 
  }

  export default Protect;