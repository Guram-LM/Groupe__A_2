// import React from 'react'
// import type { CountryType } from './CountrysInterface'
// import { HauptstatIcon, LocationIcon, UserIcon } from './SearchIcon'
// import Fav_Add from './Fav_Add'
// import useformatPopulation from '../../components/hook/useformatPopulation'
// import { useOpenClose } from '../../zushtand/OpenClose'

// interface PrppsType {
//     filterData: CountryType[] | undefined
// }
// const CountryCards:React.FC<PrppsType> = ({filterData}) => {

//     const {formatPopulation} = useformatPopulation()
//     const {open} = useOpenClose()
    
//   return (
//     <section 
//         className={`max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 ${
//             open ? "w-[800px] ml-35 lg:grid-cols-3" : "lg:grid-cols-4"
//         } gap-6 p-4`}
//     >
//         {filterData?.map((card, ind) => (
//             <div
//             key={ind}
//             className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
//             >
            
//                 <div className="w-full aspect-[4/3] max-h-40 relative">
//                     <img
//                     src={card.flags.png}
//                     alt="Country_Flags"
//                     className="w-full h-full object-cover"
//                     />
//                     <Fav_Add planDdata={card}/>
//                 </div>

            
//                 <div className="h-1/2 p-4 flex flex-col justify-between">
//                     <h2 className="text-lg font-semibold">{card.name.common}</h2>
//                     <p className="text-gray-600 flex items-center gap-2"><LocationIcon/>{card.continents[0]}</p>
//                     <p className="text-gray-700 flex items-center gap-2"><HauptstatIcon/>Capital: {card.capital?.[0]}</p>
//                     <p className="text-gray-500 flex text-sm items-center gap-2"> 
//                         <UserIcon/>{formatPopulation(card.population)} people
//                     </p>
//                 </div>
//                 <p className="bg-blue-100 text-blue-900 py-1 px-4 rounded-2xl ml-3 mt-2 mb-4 self-start text-left text-xs">
//                     {card.continents[0]}
//                 </p>
//             </div>
//         ))}
//     </section>
//   )
// }

// export default CountryCards


import React, { useState } from 'react';
import type { CountryType } from './CountrysInterface';
import { HauptstatIcon, LocationIcon, UserIcon } from './SearchIcon';
import Fav_Add from './Fav_Add';
import { useOpenClose } from '../../zushtand/OpenClose';
import useformatPopulation from '../../components/hook/useformatPopulation';
import DatailsPage from '../datailsPage/DatailsPage';
import DatailsCard from '../datailsPage/DatailsCard';
interface PropsType {
  filterData: CountryType[] | undefined;
}
const CountryCards: React.FC<PropsType> = ({ filterData }) => {
  const { formatPopulation } = useformatPopulation();
  const { open } = useOpenClose();
  const [daTailPage, setDatailsPage] = useState<CountryType | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [draggingCardId, setDraggingCardId] = useState<string | null>(null);
  // Drag start handler
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, card: CountryType) => {
    e.dataTransfer.setData('application/json', JSON.stringify(card));
    setDraggingCardId(card.name.common);
    setIsDragging(true);
    // Custom drag preview
    const dragPreview = e.currentTarget.cloneNode(true) as HTMLElement;
    dragPreview.style.position = 'absolute';
    dragPreview.style.top = '-9999px';
    dragPreview.style.left = '-9999px';
    dragPreview.style.pointerEvents = 'none';
    dragPreview.style.opacity = '1';
    dragPreview.style.filter = 'none';
    dragPreview.style.transform = 'scale(1)';
    dragPreview.style.boxShadow = '0 8px 24px rgba(0,0,0,0.25)';
    dragPreview.style.zIndex = '9999';
    document.body.appendChild(dragPreview);
    const rect = e.currentTarget.getBoundingClientRect();
    e.dataTransfer.setDragImage(dragPreview, rect.width / 2, rect.height / 2);
    setTimeout(() => {
      if (document.body.contains(dragPreview)) {
        document.body.removeChild(dragPreview);
      }
    }, 0);
  };
  // Drag end handler
  const handleDragEnd = () => {
    setIsDragging(false);
    setDraggingCardId(null);
  };
  return (
    <div className="relative">
      {/* Overlay for background dimming during drag */}
      {isDragging && (
        <div className="fixed inset-0 bg-black/50 z-10 pointer-events-none" />
      )}
      <section
        className={`max-w-[1200px] mx-auto grid grid-cols-1 sm:grid-cols-2 ${
          open ? 'w-[800px] ml-35 lg:grid-cols-3' : 'lg:grid-cols-4'
        } gap-6 p-4 relative z-20`}
      >
        {filterData?.map((card, ind) => {
          const isCurrentDragging = isDragging && card.name.common === draggingCardId;
          const isOtherCard = isDragging && !isCurrentDragging;
          return (
            <div
              key={ind}
              className={`bg-white rounded-lg shadow-md overflow-hidden flex flex-col transition-all duration-200 ${
                isCurrentDragging
                  ? 'scale-105 shadow-xl z-30' // წამოღებული ქარდი მკაფიოდ
                  : isOtherCard
                  ? 'opacity-50 pointer-events-none scale-95' // დანარჩენი უბრალოდ მუქი/გამჭვირვალე
                  : 'hover:scale-105 hover:shadow-lg'
              }`}
              draggable={!isOtherCard}
              onDragStart={(e) => handleDragStart(e, card)}
              onDragEnd={handleDragEnd}
              onClick={() => !isDragging && setDatailsPage(card)}
            >
              <div className="w-full aspect-[4/3] max-h-40 relative">
                <img
                  src={card.flags.png}
                  alt={card.name.common}
                  className="w-full h-full object-cover"
                />
                <Fav_Add planDdata={card} />
              </div>
              <div className="h-1/2 p-4 flex flex-col justify-between">
                <h2 className="text-lg font-semibold">{card.name.common}</h2>
                <p className="text-gray-600 flex items-center gap-2">
                  <LocationIcon />
                  {card.continents[0]}
                </p>
                <p className="text-gray-700 flex items-center gap-2">
                  <HauptstatIcon />
                  Capital: {card.capital?.[0] ?? 'N/A'}
                </p>
                <p className="text-gray-500 flex text-sm items-center gap-2">
                  <UserIcon />
                  {formatPopulation(card.population)} people
                </p>
              </div>
              <p className="bg-blue-100 text-blue-900 py-1 px-4 rounded-2xl ml-3 mt-2 mb-4 self-start text-left text-xs">
                {card.continents[0]}
              </p>
            </div>
          );
        })}
        <DatailsPage onClick={() => setDatailsPage(null)} istzu={!!daTailPage}>
          {daTailPage && <DatailsCard countryCard={daTailPage} />}
        </DatailsPage>
      </section>
    </div>
  );
};
export default CountryCards;