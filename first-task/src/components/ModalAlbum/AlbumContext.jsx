import {createContext, useCallback, useState} from 'react';

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {

    const [albums, setAlbums] = useState([])

    const addAlbum = useCallback((title, describe)=>{
        setAlbums([...albums, {title, describe}])
    })

    return (
        <AlbumContext.Provider value={{albums, addAlbum}}>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider;