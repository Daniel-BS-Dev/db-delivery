import axios from "axios";
import { playloadOrder } from "./types";

//const API_URI = 'https://dbdelivery.herokuapp.com';
const API_URI = process.env.REACT_APP_API_URL;
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX; //pegando o meu token

// function que return os products
export function fetchProducts(){
    return axios(`${API_URI}/products`)
}

//api para interação com o map selection
export function fetchLocalMapBox(local: string){
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`);
}

//salvando um produto
export function saveOrder(playload: playloadOrder){
    return axios.post(`${API_URI}/orders`, playload);
}