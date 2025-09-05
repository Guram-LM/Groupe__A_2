import { Route, Routes } from "react-router-dom"
import AppLayout from "../pages/AppLayout"
import Countrys from "../pages/countrys/Countrys"
import Home from "../pages/home/Home"
import Favorites from "../pages/favorites/Favorites"


const APP_NAV = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout/>} >
            <Route index element={<Home/>}/>
            <Route path="countrys" element={<Countrys/>}/>
            <Route path="favorites" element={<Favorites/>}/>
        </Route>
    </Routes>
  )
}

export default APP_NAV