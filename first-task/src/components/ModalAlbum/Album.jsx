import React, { useCallback, useContext, useState } from "react";
import { AlbumContext } from "./AlbumContext";
import AlbumItems from "./AlbumItems";
import { Modal, Button } from "react-bootstrap";
import AddForm from "./AddForm";

const Album = () => {

    const {albums} = useContext(AlbumContext);
    const [show, setShow] = useState();

    const toggleWindows = useCallback(() => setShow(prevState => !prevState))

    return (
        <div>
            <div>
                <Button onClick={toggleWindows}>Add albums</Button>	
            </div>
        
            <table className="table">
                <thead>
                    <tr className="AlbumItems">
                        <th>Name</th>
                        <th>Describe</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        albums.map(album => (
                            <tr className="AlbumItems">
                                <AlbumItems album={album}/>
                            </tr>   
                        ))
                    }
                </tbody>
            </table>
        
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add album</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AddForm />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleWindows}>Close</Button>
                </Modal.Footer>
            </Modal>      
        </div>
        )
}

export default Album;