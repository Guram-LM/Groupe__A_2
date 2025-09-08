import axios from "axios";
import { API_KEY, BASE_URL } from "../url_key/Url_Key";



export const country_wrapper = axios.create({
    baseURL: "https://restcountries.com/"
})


export const favority_wrapper = axios.create({
    baseURL: BASE_URL,
    headers: {
    "Content-Type": "application/json",
    "x-bypass-token": API_KEY
    }
})