import { useQuery } from '@tanstack/react-query'
import fatchFavorites from '../../react-query/query/fatchFavorites'
import type { rowFavoriteData } from '../../pages/favorites/favoritesInterface'

const useFatchFavorites = (resource: string) => {
  const result = useQuery<rowFavoriteData[]>({
    queryKey: ["favorites"],
    queryFn: () => fatchFavorites(resource)
  })
  return result
}

export default useFatchFavorites