import React from "react";

const AlbumItems = ({album}) => {
    return(
     <>
        <td>{album.title}</td>
        <td>{album.describe}</td>
     </>
        
    )
}

export default AlbumItems;