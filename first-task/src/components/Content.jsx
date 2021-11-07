import React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import Header from './Routers/Header';

export default function Content(){
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])

    const { params } = useRouteMatch();
    const history = useHistory();

     useEffect(() => {
       if( params.albumId) {
          fetch(`https://jsonplaceholder.typicode.com/albums/${params.albumId}/photos`).then((res) => {
            return res.json();
          }).then(data => setPhotos(data));
        }  else {
         fetch('https://jsonplaceholder.typicode.com/albums/').then((res) => {
           return res.json();
          }).then(data => setAlbums(data));
        }
     }, [params])
   
     const albumClickHandler = useCallback((e)=> {

       history.push(`/albums/${e.currentTarget.dataset.id}`);
     })
   
     const backClickHandler = useCallback(()=>{
       setPhotos([]);
       history.goBack(  );
     })

     return (
         <div className="Content">
            <Header/>
           {photos.length === 0 && albums.map((item) => <div className="ContentInfo" data-id={item.id} onClick={albumClickHandler}>{item.title}</div>)}
           {photos.length !== 0 && <div className="backClick" onClick={backClickHandler}>Back</div>}
           {photos.length !== 0 && photos.map((item) => <img src={item.url}/>)}    
         </div>
   )
}
