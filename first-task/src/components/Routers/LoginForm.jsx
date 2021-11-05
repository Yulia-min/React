import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import Header from './Header';

function LoginForm({Login, error}){
    const history = useHistory()
    const [details, setDetails] = useState({name:"", password:""})
  
    useEffect(() =>{
      if(localStorage.getItem('details')){
          history.push("/user")
      }
    })
  
    const submitHandler = useCallback((e)=>{
      e.preventDefault()
      Login(details)   
    })
  
    useEffect(() => {
      localStorage.setItem("details", JSON.stringify(details));
    }, [details]);
  
    return(
            <form>
                <Header/>
                <h2>Login</h2>
                {(error !== "") ? (<div>{error}</div>) : ""}
                <div>
                    <div>Register</div>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        onChange={e => setDetails({...details, name:e.target.value})} 
                        value={details.name}
                    />
                    <input 
                        type="password" 
                        placeholder="Password"
                        onChange={e => setDetails({...details, password:e.target.value})} 
                        value={details.password} 
                    />
                    <button onClick={submitHandler}>SignUp</button>
                </div>
            </form>
    )
  }

  export default LoginForm;
  