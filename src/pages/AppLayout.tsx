import { Outlet } from "react-router-dom"
import Header from "../components/header/Header"
import { useState } from "react"
import AddPage from "./addPage/AddPage"


const AppLayout = () => {
  const [open, setOpen] = useState<boolean>(false)
  return (
    <main>
        <Header onClick={() => setOpen(true)}/>

        <div className={`flex-1 transition-all duration-300 ${open ? "mr-80" : "mr-0"} `}>
          <Outlet/>
        </div>

        <AddPage open={open} setOpen={() => setOpen(false)}/>
        
    </main>
  )
}

export default AppLayout