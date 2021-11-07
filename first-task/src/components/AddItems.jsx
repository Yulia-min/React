import React, { useCallback, useMemo } from 'react';
import { addAlbum, addPhotos } from '../store';
import {useDispatch, useSelector} from 'react-redux';

export default function AddItems(){
    const dispatch = useDispatch();
  
    const albums = useSelector(({albums}) => {
      return albums
    });
  
    const photos = useSelector(({photos}) => {
      return photos
    });

    let albumResult = useMemo(() => 
      albums.map((item) => {
        return <div className="Albums" key={item.id}>
          <div>Title: {item.title}</div>
          <div>Author: {item.author}</div>
        </div>
    }), [albums])
  
    let photosResult = useMemo(() => photos.map((item) => {
      return <div className="Photos" key={item.id}>
        <div>Title: {item.title}</div>
        <div>Author: {item.author}</div>
      </div>
    }),[photos]);
  
    const addToAlbum = useCallback(() => {
      dispatch(addAlbum({id:2, title:'album 2', author:'Yulia'}))
    },[dispatch]);

    const addToPhotos = useCallback(() => {
        dispatch(addPhotos({id:2, title:'photo 2', author:'Yuliana'}))
      },[dispatch]);
  
    return <div>
      {albumResult}
      {photosResult}
      <button className="Button" onClick={addToAlbum}>Add albums</button>
      <button className="Button" onClick={addToPhotos}>Add photos</button>
    </div>
  }
  