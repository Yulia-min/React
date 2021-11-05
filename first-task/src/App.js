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
import { useRouteMatch, Redirect, useHistory } from 'react-router';
import SignIn from './components/Routers/SignIn';
import LoginForm from './components/Routers/LoginForm';
import Protect from './components/Routers/Protect';
import User from './components/Routers/User'
import Header from './components/Routers/Header'

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

function App(){
  return(  
    <div className="App">
      <Router>
            <Header/>
            <SignIn/>
            <Route path="/login"><LoginForm/></Route>
            <Route path="/user"><Protect><User/></Protect></Route>
            <Route path="/" exact>{localStorage.getItem("details") ? <User/> : <Content/>}</Route>     
            <Route path="/albums" exact><Content/></Route>
            <Route path="/albums/:albumId"><Content/></Route>
            <Route path="/user/:userId/albums"><Protect><Content/></Protect></Route>
            <Route path="/user/:userId/albums/:albumsId"><Protect><Content/></Protect></Route>
      </Router>
    </div>
  )
}

export default App;
