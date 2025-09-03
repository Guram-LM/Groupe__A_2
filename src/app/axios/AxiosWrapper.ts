import axios from "axios";

export const country_wrapper = axios.create({
    baseURL: "https://restcountries.com/"
})