import { useAxios } from '../../app/axios/useAxios'

const deletePlan = async (resource: string, id: string) => {
  const resul = await useAxios.delete(resource, id)
  return resul
}

export default deletePlan