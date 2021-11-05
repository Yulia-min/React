import React from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
function Header(){
    return (
      <div> 
        { localStorage.getItem("details") ?
            <Link to="/user" exact={true}>User</Link>
          :
          <>
            <Link to="/login" exact={true}>LoginForm</Link>
            <Link to="/" exact={true}>HomePage</Link>
          </>
        }
  
      </div>
    )
  }

export default Header;