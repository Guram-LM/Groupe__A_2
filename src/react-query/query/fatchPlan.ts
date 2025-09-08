import { useAxios } from '../../app/axios/useAxios'

const fatchPlan = async (resource: string) => {
  const result = await useAxios.get(resource)
  return result.data
}

export default fatchPlan