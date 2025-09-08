
import { F_L_Icon } from './FavoritesIconst'

const DefaultPage = () => {
  return (
    <section className="flex justify-center mt-50">
        <div className="text-center">
            <F_L_Icon />
            <h1 className="text-2xl font-semibold mb-2">No countries found</h1>
            <h2 className="text-gray-500 text-lg">Try adjusting your search terms or filters</h2>
        </div>
    </section>
  )
}

export default DefaultPage