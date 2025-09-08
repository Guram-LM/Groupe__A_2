import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import AddPage from "./addPage/AddPage"
import { useOpenClose } from "../zushtand/OpenClose"


const AppLayout = () => {

  const {open, closeSidebar} = useOpenClose()
  
  return (
    <main>
  
        <Header/>

        <div onClick={closeSidebar} className={`flex-1 transition-all duration-300 ${open ? "mr-80" : "mr-0"} `}>
          <Outlet/>
        </div>

        <AddPage />
        
    </main>
  )
}

export default AppLayout