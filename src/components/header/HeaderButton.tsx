
interface ButtonProps {
  onClick: () => void
}
const HeaderButton:React.FC<ButtonProps> = ({onClick}) => {
  return (
    <button 
      className="bg-blue-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
      onClick={onClick}
    >Plan a Trip</button>
  )
}

export default HeaderButton