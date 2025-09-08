import { useAxios } from '../../app/axios/useAxios'
import type { SendDataType } from '../../pages/addPage/interfaceAddPage'

const sendPlanFN = async (resource: string, data: SendDataType) => {
  const result = await useAxios.post(resource, data)
  return result.data
}

export default sendPlanFN