import {createStore, combineReducers} from 'redux';

const ADD_ALBUM_TYPE = 'ADD_ALBUM_TYPE';
const ADD_PHOTOS_TYPE = 'ADD_PHOTOS_TYPE';

export function addAlbum({title, author}){
    return{
        type: ADD_ALBUM_TYPE,
        payload:{
            title, author
        }
    }
};

export function addPhotos({title, author}){
    return{
        type: ADD_PHOTOS_TYPE,
        payload:{
            title, author
        }
    }
};

const init = {
    albums:[{id:1, title:'album 1', author:'Yulia'}],
    photos:[{id:1, title:'photo 1', author:'Yuliana'}]
};

function albums(state = init.albums, action){
    switch(action.type){
        case ADD_ALBUM_TYPE:
            return [...state, action.payload]
        default:
            return state
    }
};

function photos(state = init.photos, action){
    switch(action.type){
        case ADD_PHOTOS_TYPE:
            return [...state, action.payload]
        default:
            return state
    }
};

export default createStore(combineReducers({albums,photos}));