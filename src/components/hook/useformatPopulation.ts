
const useformatPopulation = () => {
  const formatPopulation = (population: number) :string=> {
        if(population >= 1000000) {
            return (population / 1000000).toFixed(1) + "M"
        } else if (population >= 1000) {
            return (population / 1000).toFixed(1) + "K"
        }

        return population.toString()
    }

    return {formatPopulation}
}

export default useformatPopulation