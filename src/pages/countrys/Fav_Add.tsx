import useSendFavorite from '../../components/hook/useSendFavorite'
import { usePlanState } from '../../zushtand/PlanState'
import { F_D_Herz, F_D_Plus } from '../favorites/FavoritesIconst'
import type { CountryType } from './CountrysInterface'

interface Fav_AddProps {
  data: CountryType
}

const Fav_Add:React.FC<Fav_AddProps> = ({data}) => {

  const { mutate } = useSendFavorite("favorites")

  const sendData = () => {
    mutate(data)
    alert("success")
  }

  const {addPlan} = usePlanState()

  const addDataState = () => {
    addPlan(data)
    
  }

  return (
    <section className='absolute top-3 right-3 flex items-center gap-2'>

      <button onClick={() => sendData()} className='cursor-pointer'>
        <F_D_Herz/>
      </button>
        
      <button onClick={addDataState} className='cursor-pointer'>
        <F_D_Plus/>
      </button>

    </section>
  )
}

export default Fav_Add