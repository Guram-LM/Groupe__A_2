
import { DT_Icon } from './AddIcons'



const OhnePlan = () => {
  return (
    <div>
        <h3 className="text-lg font-medium text-gray-900 mb-4">Saved Trips</h3>
        <div className="text-center py-8 text-gray-500">
            <DT_Icon/>
            <p>No saved trips</p>
            <p className="text-sm">Create and save your first trip</p>
        </div>
    </div>
  )
}

export default OhnePlan