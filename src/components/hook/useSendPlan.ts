import { useMutation } from '@tanstack/react-query'
import sendPlanFN from '../../react-query/mutation/sendPlanFN'
import type { SendDataType } from '../../pages/addPage/interfaceAddPage'
import { client } from '../../react-query'

const useSendPlan = (resource: string) => {
  const result = useMutation({
    mutationFn: (data: SendDataType) => sendPlanFN(resource, data),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("success")
        client.invalidateQueries({queryKey: ["plan"]})
    }
  })

  return result
}

export default useSendPlan