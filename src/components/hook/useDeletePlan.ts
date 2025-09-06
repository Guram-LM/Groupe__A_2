import { useMutation } from '@tanstack/react-query'
import deletePlan from '../../react-query/mutation/deletePlan'
import { client } from '../../react-query'

const useDeleteItem = (resource: string ) => {
  const result = useMutation({
    mutationFn: (id: string) => deletePlan(resource, id),
    onError: (error) => console.log(error),
    onSuccess: async () => {
      console.log("onSuccess")
      await Promise.all([
        client.invalidateQueries({ queryKey: ["favorites"] }),
        client.invalidateQueries({ queryKey: ["plan"] }),
      ])
    }
  })

  return result
}

export default useDeleteItem