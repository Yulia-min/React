import './App.css';
import UserDetails from './components/UserDetails'
import React from 'react';
import Content  from './components/Content';
import { Provider } from 'react-redux';
import store from './store';
import AddItems from './components/AddItems';


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
      <Provider store={store}>
        <div className="AddItems">
          <AddItems/>
        </div>
        <UserDetails user={user}/>
        <div className="Content">
          <Content/>
        </div>
      </Provider>
    </div>
  );
}

export default App;
