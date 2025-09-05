import { useMutation } from '@tanstack/react-query'
import deletePlan from '../../react-query/mutation/deletePlan'
import { client } from '../../react-query'

const useDeletePlan = (resource: string ) => {
  const result = useMutation({
    mutationFn: (id: string) => deletePlan(resource, id),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("onSuccess")
        client.invalidateQueries({ queryKey:["plan"]  })
    }
  })

  return result
}

export default useDeletePlan