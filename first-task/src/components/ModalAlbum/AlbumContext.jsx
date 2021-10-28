import {createContext, useState} from 'react';

export const AlbumContext = createContext()

const AlbumContextProvider = (props) => {

    const [albums, setAlbums] = useState([])

    const addAlbum = (title, describe) => {
        setAlbums([...albums, {title, describe}])
    }

    return (
        <AlbumContext.Provider value={{albums, addAlbum}}>
            {props.children}
        </AlbumContext.Provider>
    )
}

export default AlbumContextProvider;