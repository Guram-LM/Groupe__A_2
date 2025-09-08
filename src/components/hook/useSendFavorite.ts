import { useMutation } from '@tanstack/react-query'
import type { CountryType } from '../../pages/countrys/CountrysInterface'
import SendFaforites from '../../react-query/mutation/SendFaforites'
import { client } from '../../react-query'

const useSendFavorite = (resource: string) => {
  const result = useMutation({
    mutationFn: (data:CountryType) => SendFaforites(resource, data),
    onError: (error) => console.log(error),
    onSuccess: () => {
        console.log("success")
        client.invalidateQueries({queryKey: ["favorites"]})
    }
  })

  return result
}

export default useSendFavorite