import { country_wrapper } from "../../app/axios/AxiosWrapper"


const fatchCountrys = async () => {
  const result = await country_wrapper.get("v3.1/all?fields=name,flags,continents,capital,population,area,currencies,languages,region,timezones")
  return result.data
}

export default fatchCountrys