import { Route, Routes } from "react-router-dom"
import AppLayout from "../pages/AppLayout"
import Home from "../pages/home/home"


const APP_NAV = () => {
  return (
    <Routes>
        <Route path="/" element={<AppLayout/>} >
            <Route index element={<Home/>}/>
        </Route>
    </Routes>
  )
}

export default APP_NAV