
import useFatchFavorites from '../../components/hook/useFatchFavorites'
import Search from '../countrys/Search'
import DefaultPage from './DefaultPage'
import type { FavoriteDataType } from './favoritesInterface'

const Favorites = () => {

    const {data, isLoading} = useFatchFavorites("favorites")

    if(isLoading) return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
                Loading...
            </h1>
        </div>
    )
    
    const favorites:FavoriteDataType[] = data?.map(item => 
    ({...item.data, id: item.id})) ?? []
  return (
   
        <>
            {
                favorites.length > 0 ? (
                    <Search data={favorites}  />
                ) : (
                    <DefaultPage/>
                )
            }
        </>
  
  )
}

export default Favorites