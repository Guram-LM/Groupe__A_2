import { useState } from "react"
import type { CountryType } from "../countrys/CountrysInterface"
import { Del_Icon, SaveIcon } from "./AddIcons"
import SendPlan from "./SendPlan"

interface AddCardProps {
    data: CountryType[]
    removePlan: (name: string) => void 
    clearPlan: () => void
}
const AddCard:React.FC<AddCardProps> = ({data, clearPlan, removePlan}) => {
    const [wechselnButt, setWechselnButt] = useState(false)
  return (
    <section >
        <div className="bg-blue-100 border-2 border-dashed border-blue-400 rounded-lg p-7 ">

            <div className="flex justify-between items-center">
                <h1 className="text-lg font-semibold text-blue-700">Current Trip</h1>
                <button
                onClick={clearPlan}
                className="text-red-500 hover:text-red-600 font-medium"
                >
                Clear All
                </button>
            </div>

            {data?.map(item => (
                <div
                key={item.name.common}
                className="bg-white border border-none rounded-lg p-4 flex flex-col space-y-4 shadow-md"
                >
                
                <div className="flex items-center gap-4">
                    <img
                    src={item.flags.png}
                    alt="flags images"
                    className="w-20 h-14 object-cover rounded"
                    />
                    <div className="flex flex-col">
                    <h2 className="text-md font-semibold">{item.name.common}</h2>
                    <p className="text-gray-600">{item.continents[0]}</p>
                    </div>

            
                    <div className="ml-auto">
                    <button
                        onClick={() => removePlan(item.name.common)}
                        className="p-2 rounded hover:bg-red-100"
                    >
                        <Del_Icon  />
                    </button>
                    </div>
                </div>
                </div>
            ))}

        </div>

        {
            !wechselnButt ? (
                <button
                    onClick={() => setWechselnButt(true)}
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 flex items-center justify-center gap-2 w-full my-10"
                >
                    <SaveIcon />
                    Save Trip
                </button>
            ) : (
                <SendPlan setWechselnButt={setWechselnButt} />
            )
        }
       

        

</section>

  )
}

export default AddCard