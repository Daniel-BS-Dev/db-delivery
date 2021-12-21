import axios from "axios";

const API_URI = 'https://dbdelivery.herokuapp.com';

// function que return os products
export function fetchProducts(){
    return axios(`${API_URI}/products`)
}