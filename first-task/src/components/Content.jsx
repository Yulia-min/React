import React from 'react';
import { useCallback, useEffect, useState } from 'react';

export default function Content(){
    const [albums, setAlbums] = useState([])
    const [photos, setPhotos] = useState([])
   
     useEffect(() => {
       fetch('https://jsonplaceholder.typicode.com/albums/').then((res) => {
         return res.json();
       }).then(data => setAlbums(data));
     }, [])
   
     const albumClickHandler = useCallback((id)=> {
       fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`).then((res) => {
         return res.json();
       }).then(data => setPhotos(data));
     })
   
     const backClickHandler = useCallback(()=>{
       setPhotos([])
     })
   
     return (
         <div className="Content">
           {photos.length === 0 && albums.map((item) => <div className="ContentInfo" onClick={() => albumClickHandler(item.id)}>{item.title}</div>)}
           {photos.length !== 0 && <div className="backClick" onClick={backClickHandler}>Back</div>}
           {photos.length !== 0 && photos.map((item) => <img src={item.url}/>)}    
         </div>
   )
}
