import type { CountryType } from "../../pages/countrys/CountrysInterface";
import { favority_wrapper } from "./AxiosWrapper";

export const useAxios = {
    get: (resource:string) => favority_wrapper.get(`/resource/${resource}`),
    post: (resource:string, data: CountryType) => favority_wrapper.post(`/resource/${resource}`,{data:[data]}),
    delete: (resource:string, id:string) => favority_wrapper.delete(`/resource/${resource}${id}`)
}