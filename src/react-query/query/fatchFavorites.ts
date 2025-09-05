import { useAxios } from '../../app/axios/useAxios'

const fatchFavorites = async (resource: string) => {
  const result = await useAxios.get(resource)
  return result.data
}

export default fatchFavorites