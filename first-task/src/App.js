import './App.css';
import UserDetails from './components/UserDetails'
import React from 'react';

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

class Content extends React.Component{
  constructor(props){
    super(props);
    this.state =  { albums: []};
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/albums').then((res) => {
      return res.json();
    }).then(data => this.setState({albums: data}));
  }

  render() {
    return <div>{this.state.albums.map(albums => <div key = {albums.id}>{albums.title}</div>)}</div>
  }
}

function App() { 
  return (
    <div className="App">
      <UserDetails user={user}/>
      <div className="Content">
        <Content/>
      </div>

    </div>
  );
}

export default App;
