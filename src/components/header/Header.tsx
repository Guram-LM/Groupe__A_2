
import { useOpenClose } from "../../zushtand/OpenClose"
import HeaderButton from "./HeaderButton"
import Logo from "./Logo"


const Header:React.FC= () => {
  const {openSidebar} = useOpenClose()


  return (
    <header className="mb-17">
      <div className="fixed top-0 w-full bg-white  shadow-[0_1px_2px_rgba(0,0,0,0.05) border-b border-gray-200 z-20">
        <div className="flex max-w-[1200px] w-full mx-auto items-center justify-between py-4">
          <Logo />
          <HeaderButton onClick={openSidebar}/>
        </div>
      </div>
    </header>
  )
}

export default Header