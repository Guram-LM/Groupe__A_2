import React from 'react'
import type { CountryType } from '../countrys/CountrysInterface';
import { Datail_Capital, Datail_KM, Datail_location, Datail_User } from './DatailIcone';

interface SectionZveiProps {
  countryCard: CountryType;
}

export const SectionEin:React.FC<SectionZveiProps> = ({countryCard}) => {
  return (
   <div className="space-y-6">
        <div className="flex items-start gap-2">
        <Datail_location/>
        <div>
            <h2 className="font-medium text-gray-900">Region</h2>
            <p className="text-gray-700">{countryCard.region}</p>
            <p className="text-gray-500">{countryCard.subregion}</p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_Capital />
        <div>
            <h2 className="font-medium text-gray-900">Capital</h2>
            <p className="text-gray-700">{countryCard.capital?.[0] ?? "N/A"}</p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_User/>
        <div>
            <h2 className="font-medium text-gray-900">Population</h2>
            <p className="text-gray-700">{countryCard.population?.toLocaleString() ?? "N/A"}</p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_KM />
        <div>
            <h2 className="font-medium text-gray-900">Area</h2>
            <p className="text-gray-700">{countryCard.area?.toLocaleString() ?? "N/A"} km²</p>
        </div>
        </div>
    </div>
  )
}
 export default SectionEin