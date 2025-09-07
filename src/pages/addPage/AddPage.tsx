// import useFatchPlan from "../../components/hook/useFatchPlan"
// import { useOpenClose } from "../../zushtand/OpenClose"
// import { usePlanState } from "../../zushtand/PlanState"
// import AddCard from "./AddCard"
// import type { PlanDataType } from "./interfaceAddPage"
// import MyPlan from "./MyPlan"
// import OhneCard from "./OhneCard"
// import OhnePlan from "./OhnePlan"
// import PageHeder from "./PageHeder"


// const AddPage:React.FC= () => {

//   const {open, closeSidebar} = useOpenClose()

//   const { planState, clearPlan, removePlan } = usePlanState()
//   const {data, isLoading} = useFatchPlan("myplan")

//     const planData: PlanDataType[] = data?.map(item => ({
//         id: item.id,
//         resource: item.resource,
//         zeit: item.createdAt,
//         groupName: item.data.planName,
//         countries: item.data.countries
//     })) ?? [];

//     if(isLoading) return (
//         <div className="flex items-center justify-center min-h-screen">
//             <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
//                 Loading...
//             </h1>
//         </div>
//     )

  
//   return (
//      <aside
//       className={`
//         fixed top-0 right-0 h-full w-110 bg-white shadow-lg z-40
//         transition-transform duration-300
//         ${open ? "translate-x-0" : "translate-x-full"}
//       `}
//     >
      
//         <PageHeder setOpen={closeSidebar}/>

//         <div className="m-6 gap-6">
//           {
//             planState.length > 0 ? (
//               <AddCard data={planState} clearPlan={clearPlan} removePlan={removePlan}/>
//             ) : ( 
//               <OhneCard/>
//             )
//           }

//           {
//             planData.length > 0 ? (
//               <MyPlan planData={planData}/>
//             ) : (
//               <OhnePlan/>
//             )
//           }
          
          
          
//         </div>
        
//     </aside>
//   )
// }

// export default AddPage


import React from 'react';
import { useOpenClose } from '../../zushtand/OpenClose';
import { usePlanState } from '../../zushtand/PlanState';
import AddCard from './AddCard';
import type { PlanDataType } from './interfaceAddPage';
import MyPlan from './MyPlan';
import OhneCard from './OhneCard';
import OhnePlan from './OhnePlan';
import PageHeder from './PageHeder';
import type { CountryType } from '../countrys/CountrysInterface';
import useFatchPlan from '../../components/hook/useFatchPlan';
const AddPage: React.FC = () => {
  const { open, closeSidebar } = useOpenClose();
  const { planState, addPlan } = usePlanState(); // addPlan Zustand-დან
  const { data, isLoading } = useFatchPlan('myplan');
  const planData: PlanDataType[] = data?.map(item => ({
    id: item.id,
    resource: item.resource,
    zeit: item.createdAt,
    groupName: item.data.planName,
    countries: item.data.countries,
  })) ?? [];
  // Drag over ჰენდლერი
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.add('dragover');
  };
  // Drag leave ჰენდლერი
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.currentTarget.classList.remove('dragover');
  };
  // Drop ჰენდლერი
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.currentTarget.classList.remove('dragover');
    const cardData = e.dataTransfer.getData('application/json');
    if (cardData) {
      const card: CountryType = JSON.parse(cardData);
      addPlan(card); // ამატებს გადათრეულ ქვეყანას planState-ში
    }
  };
  if (isLoading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h1 className="text-2xl font-bold text-blue-600 animate-pulse">Loading...</h1>
      </div>
    );
  return (
    <aside
      className={`
        fixed top-0 right-0 h-full w-110 bg-white shadow-lg z-40
        transition-transform duration-300
        ${open ? 'translate-x-0' : 'translate-x-full'}
      `}
      onDragOver={handleDragOver} // საიდბარი drop zone-ია
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      <PageHeder setOpen={closeSidebar} />
      <div className="m-6 gap-6">
        {planState.length > 0 ? (
          <AddCard data={planState} clearPlan={usePlanState.getState().clearPlan} removePlan={usePlanState.getState().removePlan} />
        ) : (
          <OhneCard />
        )}
        {planData.length > 0 ? <MyPlan planData={planData} /> : <OhnePlan />}
      </div>
    </aside>
  );
};
export default AddPage;
