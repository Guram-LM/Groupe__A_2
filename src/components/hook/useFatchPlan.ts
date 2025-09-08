import { useQuery } from '@tanstack/react-query'
import fatchPlan from '../../react-query/query/fatchPlan'
import type { rowData } from '../../pages/addPage/interfaceAddPage'

const useFatchPlan = (resource: string) => {
  const result = useQuery<rowData[]>({
    queryKey: ["plan"],
    queryFn: () => fatchPlan(resource)
  })

  return result
}

export default useFatchPlan