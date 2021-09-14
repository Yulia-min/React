import './App.css';
import UserDetails from './components/UserDetails'
import Content from './components/Content'

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

const content={
  "id": 2,
  "name": "Yulia",
  "username": "Kliapitskaya",
  "email": "gallavich66@gmail.com",
  "address": {
    "city": "Polotsk",
    },
  "phone": "+375295126282",
}

function App() { 
  
  return (
    <div className="App">
      <UserDetails user={user}/>
      <Content content={content}/>
    </div>
  );
}

export default App;
