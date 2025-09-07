import React from 'react'

interface PageHeaderProps {
    setOpen: () => void
}

const PageHeder:React.FC<PageHeaderProps> = ({setOpen}) => {
  return (
    <div className="bg-blue-600 px-4 py-6 sm:px-6">
        <div className="flex items-center justify-between">
              <h2 className="text-lg font-medium text-white">Trip Planner</h2>
        <button onClick={setOpen} className="rounded-md font-bold text-blue-200 hover:text-white focus:outline-none focus:ring-2 border border-blue-200 px-2 py-1">
          ✕
        </button>
        </div>
        <p className="text-blue-100 text-sm mt-2">
            Drag countries here to add them to your trip
        </p>
      </div>
  )
}

export default PageHeder