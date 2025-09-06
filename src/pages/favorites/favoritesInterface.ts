import type { CountryType } from "../countrys/CountrysInterface";

export interface rowFavoriteData {
    id:string,
    data:CountryType,
    resource: string,
    updatedAt:string,
    createdAt: string,
}

export interface FavoriteDataType extends CountryType{
    id: string
}
