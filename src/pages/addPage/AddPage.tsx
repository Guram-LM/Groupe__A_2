import useFatchPlan from "../../components/hook/useFatchPlan"
import { useOpenClose } from "../../zushtand/OpenClose"
import { usePlanState } from "../../zushtand/PlanState"
import AddCard from "./AddCard"
import type { PlanDataType } from "./interfaceAddPage"
import MyPlan from "./MyPlan"
import OhneCard from "./OhneCard"
import OhnePlan from "./OhnePlan"
import PageHeder from "./PageHeder"


const AddPage:React.FC= () => {

  const {open, closeSidebar} = useOpenClose()

  const { planState, clearPlan, removePlan } = usePlanState()
  const {data, isLoading} = useFatchPlan("myplan")

    const planData: PlanDataType[] = data?.map(item => ({
        id: item.id,
        resource: item.resource,
        zeit: item.createdAt,
        groupName: item.data.planName,
        countries: item.data.countries
    })) ?? [];

    if(isLoading) return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
                Loading...
            </h1>
        </div>
    )

  
  return (
     <aside
      className={`
        fixed top-0 right-0 h-full w-110 bg-white shadow-lg z-40
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      
        <PageHeder setOpen={closeSidebar}/>

        <div className="m-6 gap-6">
          {
            planState.length > 0 ? (
              <AddCard data={planState} clearPlan={clearPlan} removePlan={removePlan}/>
            ) : ( 
              <OhneCard/>
            )
          }

          {
            planData.length > 0 ? (
              <MyPlan planData={planData}/>
            ) : (
              <OhnePlan/>
            )
          }
          
          
          
        </div>
        
    </aside>
  )
}

export default AddPage
