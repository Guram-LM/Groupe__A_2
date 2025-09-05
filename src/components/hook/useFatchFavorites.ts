import { useQuery } from '@tanstack/react-query'
import fatchFavorites from '../../react-query/query/fatchFavorites'

const useFatchFavorites = (resource: string) => {
  const result = useQuery({
    queryKey: ["favorites"],
    queryFn: () => fatchFavorites(resource)
  })
  return result
}

export default useFatchFavorites