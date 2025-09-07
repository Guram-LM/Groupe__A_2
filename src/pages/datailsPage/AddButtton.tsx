import React from 'react'
import type { CountryType } from '../countrys/CountrysInterface';
import useSendFavorite from '../../components/hook/useSendFavorite';
import { usePlanState } from '../../zushtand/PlanState';
import useFatchFavorites from '../../components/hook/useFatchFavorites';
import type { FavoriteDataType } from '../favorites/favoritesInterface';
import useDeleteItem from '../../components/hook/useDeletePlan';
import { Delete_Herz, F_D_Herz } from '../favorites/FavoritesIconst';
import { toast } from 'react-toastify';

interface AddButtonProps {
    countryCard: CountryType;
}
const AddButtton:React.FC<AddButtonProps> = ({countryCard}) => {

    const { mutate } = useSendFavorite("favorites")

    const sendData = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        mutate(countryCard)
        
    }



    const {addPlan, planState} = usePlanState()

    const addDataState = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        const valisCard = planState.some(item => item.name.common === countryCard.name.common)
        if(valisCard) {
            return toast.info("ეს ქვეყანა უკვე დამატებულია")
        } else {
            addPlan(countryCard)
            toast.success("აქჩეული ქვეყანა დაემატა")
        }
    }


    const {data} = useFatchFavorites("favorites")

    const favorites:FavoriteDataType[] = data?.map(item => 
        ({...item.data, id: item.id})) ?? []


    const shouFavorit = favorites.some(item =>
        item.name.common === countryCard.name.common
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
  return (
    <div className="flex gap-3 mb-6">

        {
            shouFavorit ? (
                <button onClick={(e) => DeleteFavirite(e, countryCard.name.common)} className="flex items-center gap-2 px-4 py-2 bg-red-500 rounded-lg cursor-pointer">
                    <Delete_Herz/> Favorited
                </button>
            ) : (
                <button onClick={sendData} className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg cursor-pointer">
                    <F_D_Herz/> Add to Favorites
                </button>
            )
        }

        


        <button onClick={addDataState} className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
        ➕ Add to Trip
        </button>
    </div>
  )
}

export default AddButtton