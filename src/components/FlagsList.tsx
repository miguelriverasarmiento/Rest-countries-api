import data from '../api/data.json'

const formatPopulation = (population: number) =>
  new Intl.NumberFormat('en-US').format(population)

export const FlagsList = () => {

  return (
    <div className="flex flex-wrap mx-10 mt-2 justify-between gap-10">
        {data.map(country => (
            <div className='w-68 h-95 rounded-md shadow-md bg-white flex flex-col'>
                <div key={country.name}>
                    <img src={country.flags.png} alt={country.name} />
                    <h2>{country.name}</h2>
                    <p>Population: {formatPopulation(country.population)}</p>
                    <p>Region: {country.region}</p>
                    <p>Capital: {country.capital}</p>
                </div>
            </div>
        ))}
    </div>
  )
}
