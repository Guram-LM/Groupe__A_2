import type { CountryType } from "../countrys/CountrysInterface";

export interface SendDataType {
  planName: string
  countries: CountryType[]
}

export interface PlanDataType {
  id: string;
  resource: string;
  zeit: string;       
  groupName: string;  
  countries: CountryType[];
}

export interface rowData {
    id:string,
    data:SendDataType,
    resource: string,
    updatedAt:string,
    createdAt: string,

}
