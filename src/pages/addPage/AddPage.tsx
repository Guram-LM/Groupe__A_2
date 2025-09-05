
interface AddPagePrpps {
    open: boolean
    setOpen: () => void
}
const AddPage:React.FC<AddPagePrpps> = ({open, setOpen}) => {
  return (
     <aside
      className={`
        fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-40
        transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}
      `}
    >
      
      <div className="p-4 border-b flex justify-between items-center">
        <h2 className="font-semibold text-lg">Plan a Trip</h2>
        <button onClick={setOpen} className="text-blue-800 text-xl font-bold">
          ✕
        </button>
      </div>

      
      <div className="p-4">
        AddPage content here...
      </div>
    </aside>
  )
}

export default AddPage