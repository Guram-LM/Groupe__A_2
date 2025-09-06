import useDeleteItem from '../../components/hook/useDeletePlan'
import useFatchFavorites from '../../components/hook/useFatchFavorites'
import useSendFavorite from '../../components/hook/useSendFavorite'
import { useOpenClose } from '../../zushtand/OpenClose'
import { usePlanState } from '../../zushtand/PlanState'
import { Delete_Herz, F_D_Herz, F_D_Plus } from '../favorites/FavoritesIconst'
import type { FavoriteDataType } from '../favorites/favoritesInterface'
import type { CountryType } from './CountrysInterface'

interface Fav_AddProps {
  planDdata: CountryType
}

const Fav_Add:React.FC<Fav_AddProps> = ({planDdata}) => {

  const { mutate } = useSendFavorite("favorites")

  const sendData = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    mutate(planDdata)
  }

  const {addPlan} = usePlanState()

  const addDataState = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation()
    addPlan(planDdata)
    
  }


  const {data} = useFatchFavorites("favorites")

  const favorites:FavoriteDataType[] = data?.map(item => 
      ({...item.data, id: item.id})) ?? []


  const shouFavorit = favorites.some(item =>
    item.name.common === planDdata.name.common
  )

  const {mutate:deleteFN} = useDeleteItem("favorites")

  const DeleteFavirite = (e: React.MouseEvent<HTMLButtonElement>, name: string) => {
    e.stopPropagation()
    const delItem = favorites.find(item => 
      item.name.common === name
    )
    if(delItem) 
      deleteFN(delItem?.id)
  }



  const {open} = useOpenClose()
  

  return (
    <section className='absolute top-3 right-3 flex items-center gap-2'>

      {
        shouFavorit ? (
          <button onClick={(e) => DeleteFavirite(e, planDdata.name.common)} className='cursor-pointer'>
            <Delete_Herz/>
          </button>
        ) : (
          <button onClick={sendData} className='cursor-pointer'>
            <F_D_Herz/>
          </button>
        )
      }
      
      {
        open ? (
          null
        ) : (
          <button onClick={addDataState} className='cursor-pointer'>
            <F_D_Plus/>
          </button>
        )
      }
      

    </section>
  )
}

export default Fav_Add