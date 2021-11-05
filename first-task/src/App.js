import './App.css';
import UserDetails from './components/User/UserDetails'
import React, { useEffect, useState,useContext,useCallback } from 'react';
import Content  from './components/Content';
import ScrollToBottom from './components/Scroll/ScrollToBottom';
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Album from './components/ModalAlbum/Album';
import AlbumContextProvider from './components/ModalAlbum/AlbumContext';
import ErrorBoundary from './components/Error/ErrorBoundry';
import { Provider } from 'react-redux';
import store from './store';
import AddItems from './components/AddItems';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import { useRouteMatch, Redirect, Switch, useHistory } from 'react-router';
import SignIn from './components/Routers/SignIn';
import LoginForm from './components/Routers/LoginForm';
import Protect from './components/Routers/Protect';
import UserId from './components/Routers/UserId';
import User from './components/Routers/User'

const user = {
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}


function Header(){
  return (
    <div> 
      { localStorage.getItem("details") ?
        <>
          <Link to="/user" exact={true}>User</Link>
        </>
        :
        <>
          <Link to="/login" exact={true}>LoginForm</Link>
          <Link to="/" exact={true}>HomePage</Link>
        </>
      }

    </div>
  )
}

function App(){
  return(  
    <div className="App">
      <Router>
          <Header/>
          <SignIn/>
          <Route path="/login" exact={true}><LoginForm/></Route>
          <Route path="/user" exact={true}><Protect Cmp={User}/></Route>
          { localStorage.getItem("details") ?
          <>
            <Route path="/" exact={true}><UserId/></Route> 
          </>
          :
          <>
            <Route path="/" exact={true}><Content/></Route> 
          </>
          }       
          <Route path="/user/:userId" exact={true}><Protect  Cmp={UserId}/></Route>
          <Route path="/albums" exact={true}><Content/></Route>
          <Route path="/albums/:albumId" exact={true}><Content/></Route>
          <Route path="/user/:userId/albums" exact={true}><Protect Cmp={Content}/> </Route>
          <Route path="/user/:userId/albums/:albumsId" exact={true}><Protect Cmp={Content}/> </Route>
      </Router>

  {/*     <ScrollToBottom/>
      <ScrollToTop/>
      <UserDetails user={user}/>
      <ErrorBoundary>
        <AlbumContextProvider>
            <Album/>
        </AlbumContextProvider>
      </ErrorBoundary>
      <div className="Content">
        <Content/>
      </div>
      <Provider store={store}>
        <div className="AddItems">
          <AddItems/>
        </div>
      </Provider> */}
    </div>
  )
}

export default App;
