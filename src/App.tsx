import { ToastContainer } from "react-toastify"
import APP_NAV from "./app-nav/APP-NAV"


function App() {
  

  return (
    <>
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />

        <APP_NAV/>
    </>
  
    
  )
}

export default App
