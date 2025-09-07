import React, { type ReactNode } from 'react'

interface DatailsPageProps{
    istzu: boolean
    onClick: () => void
    children: ReactNode
}
const DatailsPage:React.FC<DatailsPageProps> = ({children, istzu, onClick}) => {
    if (!istzu) return null;
  return (
      <div
      className="fixed  inset-0 z-40 flex items-center justify-center bg-black/50"
      onClick={onClick}
    >
      <div
        className="bg-white rounded-2xl shadow-xl w-[700px] relative"
        onClick={(e) => e.stopPropagation()} 
      >
       
        <button
          className="absolute top-5 right-5 text-black hover:text-gray-800 z-50 rounded-full bg-gray-200 px-3 py-1.5 font-bold"
          onClick={onClick}
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  )
}

export default DatailsPage