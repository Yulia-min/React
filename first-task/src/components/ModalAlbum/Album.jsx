import React, { useContext, useState } from "react";
import { AlbumContext } from "./AlbumContext";
import AlbumItems from "./AlbumItems";
import { Modal, Button } from "react-bootstrap";
import AddForm from "./AddForm";

const Album = () => {

    const {albums} = useContext(AlbumContext);
    const [show, setShow] = useState(false);

    const showWindow = () => setShow(true);
    const close = () => setShow(false);

    return (
        <div>
            <div>
                <Button onClick={showWindow}>Add albums</Button>	
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
                    <Button onClick={close}>Close</Button>
                </Modal.Footer>
            </Modal>      
        </div>
        )
}

export default Album;