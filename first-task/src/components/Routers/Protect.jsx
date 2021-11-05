import React, { useEffect} from 'react';
import { useHistory } from 'react-router';

function Protect(props){
    const history = useHistory();
    let Cmp = props.Cmp;
    useEffect(() => {
      if(!localStorage.getItem('details')){
        history.push("/login");
    }
    })
    return (<div><Cmp/></div>) 
  }

  export default Protect;