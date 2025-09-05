import React from 'react'
import type { CountryType } from './CountrysInterface'
import { HauptstatIcon, LocationIcon, UserIcon } from './SearchIcon'
import Fav_Add from './Fav_Add'
interface PrppsType {
    filterData: CountryType[] | undefined
}
const CountryCards:React.FC<PrppsType> = ({filterData}) => {

    const formatPopulation = (population: number) :string=> {
        if(population >= 1000000) {
            return (population / 1000000).toFixed(1) + "M"
        } else if (population >= 1000) {
            return (population / 1000).toFixed(1) + "K"
        }

        return population.toString()
    }
    
  return (
    <section className="max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {filterData?.map((card, ind) => (
            <div
            key={ind}
            className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
            >
            
                <div className="w-full aspect-[4/3] max-h-40 relative">
                    <img
                    src={card.flags.png}
                    alt="Country_Flags"
                    className="w-full h-full object-cover"
                    />
                    <Fav_Add data={card}/>
                </div>

            
                <div className="h-1/2 p-4 flex flex-col justify-between">
                    <h2 className="text-lg font-semibold">{card.name.common}</h2>
                    <p className="text-gray-600 flex items-center gap-2"><LocationIcon/>{card.continents[0]}</p>
                    <p className="text-gray-700 flex items-center gap-2"><HauptstatIcon/>Capital: {card.capital?.[0]}</p>
                    <p className="text-gray-500 flex text-sm items-center gap-2"> 
                        <UserIcon/>{formatPopulation(card.population)} people
                    </p>
                </div>
                <p className="bg-blue-100 text-blue-900 py-1 px-4 rounded-2xl ml-3 mt-2 mb-4 self-start text-left text-xs">
                    {card.continents[0]}
                </p>
            </div>
        ))}
    </section>
  )
}

export default CountryCards