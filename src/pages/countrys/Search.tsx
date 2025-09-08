import React, { useState } from 'react'
import type { CountryType } from './CountrysInterface'
import { Filter, Serch } from './SearchIcon'
import CountryCards from './CountryCards'
import { HerzIcon } from '../favorites/FavoritesIconst'
import { Link } from 'react-router-dom'
import { useOpenClose } from '../../zushtand/OpenClose'

interface PrppsType {
    data: CountryType[] | undefined
}
const Search:React.FC<PrppsType> = ({data}) => {

    const [searchCountry, setSearchCountry] = useState("")
    const [filterRegion, setFilterRegion] = useState("All")

    const { open } = useOpenClose()

    const regions = Array.from(new Set(data?.map((item) => item.region)));


    const filterData = data?.filter(item =>{
    const filterCountry = item.name.common.toLowerCase().includes(searchCountry)
    const filterContinet = filterRegion === "All" || item.region === filterRegion;

    return filterCountry && filterContinet
})
    
  return (
    <main>
        <div className='flex mb-30'>
            <div className='w-full bg-white fixed mb-25 z-10 pt-5'>
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center gap-4 py-4">
                    <label className="flex items-center  rounded-md px-3 py-2 border border-gray-500 w-110 " >
                        <Serch  />
                        <input
                        type="text"
                        placeholder="Search countries..."
                        className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 "
                        onChange={(e) => setSearchCountry(e.target.value)}
                        />
                    </label>
                    <div className="relative flex items-center rounded-md px-3 py-2 border border-gray-500 w-110  ">
                        <Filter />
                        <select
                        value={filterRegion}
                        onChange={(e) => setFilterRegion(e.target.value)}
                    className="appearance-none rounded-md pl-10 pr-3 w-full text-gray-700 outline-none"
                        >
                        <option className='w-full' value="All">All</option>
                        {regions.map((reg, index) => (
                            <option key={index} value={reg} className='w-full'>
                            {reg}
                            </option>
                        ))}
                        </select>
                    </div>
                    <label className="flex items-center gap-2 text-gray-700"> 
                        <input type="checkbox" className="w-4 h-4 text-blue-600 rounded border-gray-300" />
                        <HerzIcon/>
                        <Link to={"/favorites"}>Show favorites only</Link>
                    </label>
                </div>

                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center pb-4 text-gray-500 text-sm">
                    Showing {filterData?.length || 0} of {data?.length || 0} countries
                    {open &&  <p className='text-blue-500 ml-2.5 font-bold'>. Drag Countrys to the trip planner to add team</p>}
                </div>

            </div>
     
        </div>
      <div className='w-full bg-gray-100 pt-5 '>
          <CountryCards filterData={filterData}/>
      </div>

    </main>
  )
}

export default Search