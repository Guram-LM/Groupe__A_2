
import { useAxios } from '../../app/axios/useAxios'
import type { CountryType } from '../../pages/countrys/CountrysInterface'

const SendFaforites = async(resource: string, data:CountryType) => {
  const result = await useAxios.post(resource, data)
  return result.data
}

export default SendFaforites