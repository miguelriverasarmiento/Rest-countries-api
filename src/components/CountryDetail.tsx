import data from '../api/data.json'
import type { Country } from '../types/Country'

interface Props {
  country: Country;
  onBack: () => void;
}

  const formatPopulation = (population: number) =>
  new Intl.NumberFormat('en-US').format(population)

export const CountryDetail = ({ country, onBack }: Props) => {
  const allCountries = data as Country[]

  // Buscar los países fronterizos por su código alpha3Code
  const borderCountries = (country.borders || [])
    .map((code) => allCountries.find((c) => c.alpha3Code === code))
    .filter((c): c is Country => Boolean(c))

  return (
    <div className="px-4 sm:px-6 md:px-10 py-6 md:py-10">
      <button
        onClick={onBack}
        className="flex items-center gap-2 px-6 py-2 mb-10 rounded-md shadow-md bg-white dark:bg-Blue-900-Dark-Mode-Elements dark:text-white transition-colors"
      >
        ← Back
      </button>

      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-center lg:items-start">
        <img
          src={country.flags.png}
          alt={country.name}
          className="w-full max-w-140 rounded-md shadow-md"
        />

        <div className="w-full">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 dark:text-white">
            {country.name}
          </h1>

          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            <div className="flex flex-col gap-2 dark:text-white">
              <p><span className="font-medium">Native Name:</span> {country.nativeName}</p>
              <p><span className="font-medium">Population:</span> {formatPopulation(country.population)}</p>
              <p><span className="font-medium">Region:</span> {country.region}</p>
              <p><span className="font-medium">Sub Region:</span> {country.subregion || 'N/A'}</p>
              <p><span className="font-medium">Capital:</span> {country.capital || 'N/A'}</p>
            </div>

            <div className="flex flex-col gap-2 dark:text-white">
              <p><span className="font-medium">Top Level Domain:</span> {country.topLevelDomain?.join(', ')}</p>
              <p><span className="font-medium">Currencies:</span> {country.currencies?.map((c) => c.name).join(', ') || 'N/A'}</p>
              <p><span className="font-medium">Languages:</span> {country.languages?.map((l) => l.name).join(', ') || 'N/A'}</p>
            </div>
          </div>

          {borderCountries.length > 0 && (
            <div className="mt-10 flex flex-col md:flex-row md:items-center gap-4">
              <span className="font-medium dark:text-white">Border Countries:</span>
              <div className="flex flex-wrap gap-2">
                {borderCountries.map((border) => (
                  <span
                    key={border.alpha3Code}
                    className="px-6 py-1 rounded-md shadow-md bg-white dark:bg-Blue-900-Dark-Mode-Elements dark:text-white text-sm"
                  >
                    {border.name}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
