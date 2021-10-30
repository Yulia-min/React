import './App.css';
import UserDetails from './components/UserDetails'
import React from 'react';
import Content  from './components/Content';
import ScrollToBottom from './components/Scroll/ScrollToBottom';
import ScrollToTop from "./components/Scroll/ScrollToTop"
import Album from './components/ModalAlbum/Album';
import AlbumContextProvider from './components/ModalAlbum/AlbumContext';
import ErrorBoundary from './components/Error/ErrorBoundry'

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

function App() { 
  return (
    <div className="App">
      <ScrollToBottom/>
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
    </div>
  );
}

export default App;
