import { Route, Routes } from "react-router-dom"
import AppLayout from "../pages/AppLayout"
import Countrys from "../pages/countrys/Countrys"
import Home from "../pages/home/Home"


const APP_NAV = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout/>} >
            <Route index element={<Home/>}/>
            <Route path="countrys" element={<Countrys/>}/>
        </Route>
    </Routes>
  )
}

export default APP_NAV