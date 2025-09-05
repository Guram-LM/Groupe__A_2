
import HeaderButton from "./HeaderButton"
import Logo from "./Logo"

interface HeaderProps {
  onClick: () => void
}
const Header:React.FC<HeaderProps> = ({onClick}) => {
  return (
    <header className="w-full bg-white shadow-md border-b border-gray-300">
      <div className="flex max-w-[1200px] w-full mx-auto items-center justify-between py-4">
        <Logo />
        <HeaderButton onClick={onClick}/>
      </div>
    </header>
  )
}

export default Header