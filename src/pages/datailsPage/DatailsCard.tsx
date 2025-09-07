import React from "react";
import type { CountryType } from "../countrys/CountrysInterface";
import AddButtton from "./AddButtton";
import { SectionZvei } from "./SectionZvei";
import SectionEin from "./SectionEins";

interface ModalProps {
  countryCard: CountryType;
}

const DatailsCard: React.FC<ModalProps> = ({ countryCard }) => {
  if (!countryCard) return null;

  return (
    <div>
      <div className="h-45 w-full relative">
        <img
          src={countryCard.flags.png}
          alt={countryCard.flags.alt || `${countryCard.name.common} flag`}
          className="w-full h-full object-cover rounded-t-xl"
        />
      </div>

      <div className="p-6">
        <div className="absolute top-30 left-5">
          <h2 className="text-2xl font-bold text-white">
            {countryCard.name.common}
          </h2>
          <p className="text-white mb-4">{countryCard.name.official}</p>
        </div>

            <AddButtton countryCard={countryCard}/>
        

    
            <div className="grid grid-cols-2 gap-8 text-sm">
     
            <SectionEin countryCard={countryCard}/>

            <SectionZvei countryCard={countryCard}/>
            
            </div>

      </div>
    </div>
  );
};

export default DatailsCard;
