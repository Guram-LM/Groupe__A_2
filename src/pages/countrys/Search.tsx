import React, { useState } from 'react'
import type { CountryType } from './CountrysInterface'
import { Serch } from './SearchIcon'

interface PrppsType {
    data: CountryType[] | undefined
}
const Search:React.FC<PrppsType> = ({data}) => {

    const [searchCountry, setSearchCountry] = useState("")
    
  return (
    <section>
        <label htmlFor="">{<Serch/>}
            <input type="text" placeholder='Search countries...' />
        </label>
    </section>
  )
}

export default Search