
import useFatchFavorites from '../../components/hook/useFatchFavorites'
import DefaultPage from './DefaultPage'

const Favorites = () => {

    const {data, isLoading} = useFatchFavorites("favorites")

    if(isLoading) return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
                Loading...
            </h1>
        </div>
    )
    console.log(data)
  return (
   
        <>
            <DefaultPage/>
        </>
  
  )
}

export default Favorites