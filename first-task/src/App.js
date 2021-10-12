import './App.css';
import UserDetails from './components/UserDetails'
import React from 'react';
import Content  from './components/Content';

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

/*function AlbumCell({ title, id }){
  const [isImageView, setIsImageView] = useState(false)
  if(isImageView){
     return <AlbomImageCell id={id}/>
  } else {
    return (
      <div className="ContentInfo" onClick={() => setIsImageView(true)}>{title}</div>
    )
  }
}

function AlbomImageCell({id}){
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((res) => {
      return res.json();
    }).then(data => setPhotos(data));
  },[])

  return (
    <div>{photos.map((item) => <img src={item.url}/> )}</div>
  )
}*/

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
