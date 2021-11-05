import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router';
import LoginForm from '../Routers/LoginForm'

function SignIn(){
    const history = useHistory();
  
    const [user, setUser] = useState({name:"", password:""});
    const [error, setError] = useState("");
  
    const login = details =>{
        if(details.name && details.password){
            fetch(`https://jsonplaceholder.typicode.com/users?username=${details.password}&email=${details.name}`)
            .then(res => res.json())
            .then(([data]) => {
            if (data) {
                setUser(data)
            }else{
                setError("incorrect")
            }
            });
        }else{
          setError("no")
        }
    }
  
    const logOut = useCallback(() => {
        setUser(null);
        history.push('/');
    });
  
    return(
      <div>
         {(user) ? (
          <div>
            <button onClick={logOut}>Logout</button></div>)
          :
          (<LoginForm Login={login} error={error}/>)
        }
      </div> 
    ) 
  }

  export default SignIn;