
import useDeletePlan from '../../components/hook/useDeletePlan'
import { Del_Icon } from './AddIcons'
import type { PlanDataType } from './interfaceAddPage'


interface MyPlanType {
    planData: PlanDataType[]
}
const MyPlan:React.FC<MyPlanType> = ({planData}) => {
    const {mutate} = useDeletePlan("myplan")
    const delPlan = (id: string) => {
        mutate(id)
    }
  return (
    <section className="space-y-4">
  {planData.map((item) => (
    <div
      key={item.id}
      className="border rounded-lg p-4 shadow-sm flex flex-col gap-2"
    >
      <div className="flex justify-between items-start">
        <p className="font-semibold text-lg">{item.groupName}</p>
        <button
          onClick={() => delPlan(item.id)}
          className="text-red-500 hover:text-red-600"
        >
          <Del_Icon />
        </button>
      </div>
      <p className="text-gray-500 text-sm">
         {item.countries.length} countries • {item.zeit.slice(0, 10)}
      </p>
      <div className="flex items-center gap-1">
        {item.countries.slice(0, 3).map((img) => (
          <img
            key={img.name.common}
            src={img.flags.png}
            alt={img.name.common}
            className="w-6 h-4 rounded-sm object-cover border"
          />
        ))}
        {item.countries.length > 3 && (
          <span className="text-gray-500 text-sm">
            +{item.countries.length - 3} more
          </span>
        )}
      </div>
      <button className="mt-2 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
        Load Trip
      </button>
    </div>
  ))}
</section>
  )
}

export default MyPlan