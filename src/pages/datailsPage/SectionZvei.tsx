import React from 'react'
import type { CountryType } from '../countrys/CountrysInterface';
import { Datail_Continents, Datail_Geld, Datail_Language, Datail_Zeit } from './DatailIcone';

interface SectionZveiProps {
  countryCard: CountryType;
}

export const SectionZvei:React.FC<SectionZveiProps> = ({countryCard}) => {
  return (
    <div className="space-y-6">
        <div className="flex items-start gap-2">
        <Datail_Geld />
        <div>
            <h2 className="font-medium text-gray-900">Currency</h2>
            <p className="text-gray-700">
            {countryCard.currencies
                ? Object.values(countryCard.currencies)
                    .map((c) => `${c.name} (${c.symbol})`)
                    .join(", ")
                : "N/A"}
            </p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_Language />
        <div>
            <h2 className="font-medium text-gray-900">Languages</h2>
            <p className="text-gray-700">{Object.values(countryCard.languages ?? {}).join(", ") || "N/A"}</p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_Zeit />
        <div>
            <h2 className="font-medium text-gray-900">Timezones</h2>
            <p className="text-gray-700">{countryCard.timezones?.join(", ") ?? "N/A"}</p>
        </div>
        </div>

        <div className="flex items-start gap-2">
        <Datail_Continents />
        <div>
            <h2 className="font-medium text-gray-900">Continents</h2>
            <p className="text-gray-700">{countryCard.continents?.join(", ") ?? "N/A"}</p>
        </div>
        </div>
    </div>
  )
}
