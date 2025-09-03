import { useQuery } from '@tanstack/react-query'
import fatchCountrys from '../../react-query/query/fatchCountrys'
import type { CountryType } from '../../pages/countrys/CountrysInterface'

const useFatchCountrys = () => {
  const result = useQuery<CountryType[]>({
    queryKey:["countrya"],
    queryFn: () => fatchCountrys()
  })

  return result
}

export default useFatchCountrys