import React, {useContext, useState} from "react";
import {Form, Button} from "react-bootstrap"
import { AlbumContext } from "./AlbumContext";

const AddForm = () => {
    const {addAlbum} = useContext(AlbumContext);
    const [addAlbumItem, setAddAlbumItem] = useState({
        title:"", describe: ""
    });

    const addInput = (e) => {
        setAddAlbumItem({...addAlbumItem,[e.target.name]: e.target.value})
    }

    const {title, describe} = addAlbumItem;

    const handleSubmit = (e) => {
        e.preventDefault();
        addAlbum(title, describe);
    }
    return(
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control 
                    placeholder="name"
                    name="title"    
                    value={title}
                    required
                    onChange = { (e) => addInput(e)}
                />
                <Form.Control
                    placeholder="describe"
                    name="describe"
                    value={describe}
                    required
                    onChange = { (e) => addInput(e)}
                    />
            </Form.Group>
            <Button type="submit">Create</Button>
        </Form>
    )
}

export default AddForm;