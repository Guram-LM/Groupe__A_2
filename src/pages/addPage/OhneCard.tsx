
import { Loc_Icon } from './AddIcons'

const OhneCard = () => {
   return (
    <section className="mb-8 min-h-[200px] border-2 border-dashed rounded-lg p-4 transition-colors duration-200 border-blue-300 bg-blue-50">
        <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-medium text-gray-900">Current Trip</h3>
        </div>
        <div className="text-center py-8 text-gray-500">
            <Loc_Icon/>
            <p className="font-medium">Drop countries here</p>
            <p className="text-sm">Drag countries from the list to add them to your trip</p>
        </div>
    </section>
  )
}

export default OhneCard