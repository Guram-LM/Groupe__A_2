import useFatchCountrys from "../../components/hook/useFatchCountrys"
import Search from "./Search"


const Countrys = () => {
    const {data, isLoading} = useFatchCountrys()

    if(isLoading) return (
        <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold text-blue-600 animate-pulse">
                Loading...
            </h1>
        </div>
    )

  return <Search data={data}/>
    
  
}

export default Countrys